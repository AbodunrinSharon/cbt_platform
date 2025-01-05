const { createServer } = require('node:http');
const { Server } = require('socket.io');
const { join } = require('node:path');
const express = require('express');
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
const VERSION = '1.0.0';

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

    app.get('/', join('../public/index.html'));
    app.use('/css', express.static('../public/css'));
    app.use('/js', express.static('../public/js'));
    app.use('/views', express.static('../public/views'));

    io.on('connection', (socket) => {
        log('A client joined');
        io.emit('version', VERSION);
        socket.on('disconnect', () => {
            log('A client left');
        });

        /* Server logic and operations here */
    });

    server.listen(port, () => {
        log(`server running at http://localhost:${port}`);
    });
}

function stop() {
    io.close();
    server.close();
    log('Stopping Server Socket');
}

exports.init = init;
exports.stop = stop;
