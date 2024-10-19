/**
 * @file create-logger.js
 * @module create-logger
 */
let _func;
let history = [];
let time = () => {return `[${/\d\d\:\d\d\:\d\d/.exec(Date())[0]}]`};
let LogByTypeFactory = function LogByTypeFactory(name, log) {
    return function (type, level, args) {
        let _args = args
        let lvl = log.levels[level];
        let lvlRegExp = new RegExp('^(' + lvl + ')$');

        if (type !== 'log') {
            args.unshift(type.toUpperCase() + ':');
        }

        args.unshift(`${time()} ${name}:`);

        if (history) {
            history.push([].concat(args));

            let splice = history.length - 1000;
            history.splice(0, splice > 0 ? splice : 0);
        }

        if (!console) { return; }
        let fn = console[type];
        if (!fn && type === 'debug') { fn = console.info || console.log; }
        if (!fn || !lvl || !lvlRegExp.test(type)) { return; }

        fn[Array.isArray(args) ? 'apply' : 'call'](console, args);
        if (_func !== undefined) _func(_args);
    };
};

function createLogger(name) {
    let level = 'info';
    let logByType;

    let log = function log() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        logByType('log', level, args);
    };


    logByType = LogByTypeFactory(name, log);

    log.createLogger = function (subname) {
        return createLogger(name + ': ' + subname);
    };


    log.levels = {
        all: 'debug|log|warn|error',
        off: '',
        debug: 'debug|log|warn|error',
        info: 'log|warn|error',
        warn: 'warn|error',
        error: 'error',
        DEFAULT: level
    };

    log.level = function (lvl) {
        if (typeof lvl === 'string') {
            if (!log.levels.hasOwnProperty(lvl)) {
                throw new Error('\'' + lvl + '\' in not a valid log level');
            }

            level = lvl;
        }

        return level;
    };

    log.history = function () {
        return history ? [].concat(history) : [];
    };

    log.history.filter = function (fname) {
        return (history || []).filter(function (historyItem) {
            return new RegExp('.*' + fname + '.*').test(historyItem[0]);
        });
    };

    log.history.clear = function () {
        if (history) {
            history.length = 0;
        }
    };

    log.history.disable = function () {
        if (history !== null) {
            history.length = 0;
            history = null;
        }
    };

    log.history.enable = function () {
        if (history === null) {
            history = [];
        }
    };

    log.error = function () {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        return logByType('error', level, args);
    };

    log.warn = function () {
        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
        }

        return logByType('warn', level, args);
    };

    log.debug = function () {
        for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
        }

        return logByType('debug', level, args);
    };

    log.printLog = function (func) {_func = func};

    return log;
}
exports.createLogger = createLogger;