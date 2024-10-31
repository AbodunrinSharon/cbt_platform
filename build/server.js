const express = require('express');
const { createServer } = require('node:http');
const { Server } = require('socket.io');
const args = require("minimist")(process.argv);
const app = express();
const server = createServer(app);
const logger = require('./logger.js');
const log = logger.createLogger('[Server-Socket]');
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
        allowedHeaders: ['Content-Type'],
        credentials: true
    }
});
const VERSION = '1.0.2';

let userList = [], isAvalible;

if (args.wsPort && !args.hostPort) init(args.wsPort);

function init(port) {
    log(`Starting Server Socket v${VERSION}`)
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,HEAD.OPTIONS.POST,PUT');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        next();
    });

    io.on('connection', (socket) => {
        log('A user joined');
        io.emit('version', VERSION);
        socket.on('user_conn', (json) => {
            isAvalible = true;
            for (let i = 0;i < userList.length;i++) {
                if (json.id == userList[i].id) {
                    if (userList[i].online == true) {
                        io.emit('info', 'User is already logged in');
                        isAvalible = false;
                    } else {
                        io.emit('user_list', userList);
                        isAvalible = false;
                    }
                    break;  
                }
            }
            if (isAvalible) {
                userList.push({id: json.id, online: true, status: 'active'});
                io.emit('user_list', userList);
            }
            userList.forEach(user => {
                user.online = false;
                user.status = 'offline';
            });
            io.emit('check', 'online');
        });

        socket.on('request_users', () => {
            io.emit('user_list', userList)
        })

        socket.on('online_response', (id) => {
            if (userList.length == 0) {
                io.emit('user_list', []);
            } else {
                userList.forEach(user => {
                    if (user.id == id) {
                        user.online = true;
                        user.status = 'active';
                    }
                });
                io.emit('user_list', userList);
            }
        });

        socket.on('message', json => {
            io.emit('message', json);
        });

        socket.on('disconnect', () => {
            log('A user left');
            userList.forEach(user => {
                user.online = false;
                user.status = 'offline';
            });
            io.emit('check', 'online');

        });
    });

    server.listen(port, () => {
        log(`server running at http://localhost:${port}`);
    });
}

function stop() {
    io.close();
    log('Stopping Server Socket');
}

exports.init = init;
exports.stop = stop;