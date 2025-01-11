/**
 * @file create-logger.js
 * @module create-logger
 */
(function (exports) {
    let history = [];
    let time = () => {return `[${/\d\d\:\d\d\:\d\d/.exec(Date())[0]}]`};
    let LogByTypeFactory = function LogByTypeFactory(name, log) {
        return function (type, level, args) {
            let lvl = log.levels[level];
            let lvlRegExp = new RegExp('^(' + lvl + ')$');

            if (type !== 'log') {
                args.unshift(`${type.toUpperCase()}:`);
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

        log.createLogger = function (subName) {
            return createLogger(name + ': ' + subName);
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

        return log;
    }
    exports.createLogger = createLogger;
})(window);

(function(window) {
    const document = window.document;
    const EQuery = window.EQuery;
    const signals = window.signals;
    const isElectron = window.isElectron = window.electronBridge !== undefined;
    const VERSION = '1.0.0';

    if (document == undefined) {
        throw new Error('A document is required to run');
    }
    if (EQuery == undefined) {
        alert('The application was not installed properly');
        throw new Error('EQuery need to be included');
    }
    if (signals == undefined) {
        alert('The application was not install properly');
        throw new Error('Signals needs to be included');
    }

    const imgTypes = ['png', 'jpg', 'jpeg', 'ico', 'webm'];
    const _log = window.createLogger('[Admin_Dashboard]');
    const start = performance.now();

    const route = {
        'dashboard': {},
        'courses': {},
        'student': {},
        'settings': {},
        'logout': {},
    }

    const userAgent = navigator.userAgent;
    const platform = navigator.platform;

    const edge = /Edge\/(\d+)/.exec(userAgent);
    const presto = /Opera\//.test(userAgent);

    const ios = !edge && /AppleWebKit/.test(userAgent) && /isMobile\/\w+/.test(userAgent);
    const android = /Android/.test(userAgent);

    const mobile = ios || android || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(userAgent);
    const mac = ios || /Mac/.test(platform);
    // let windows = /win/i.test(platform);
    if (/Mac/.test(platform)) { alert('macOS version unavailable');return; }

    let presto_version = presto && userAgent.match(/Version\/(\d*\.\d*)/);
    if (presto_version) {
        presto_version = Number(presto_version[1]);
    }
    if (presto_version && presto_version >= 15) {
        presto = false;
        webkit = true;
    }

    window.offline = false;
    window.response = false;
    let valid, port = 8000, currentTab = 0, tries = 10;
    let isMobile = mobile || false;
    let host = 'https://enemetronics.com.ng/';

    let navState = 1;

    function extractQuery() {
        let arr = {};
        let query = new URLSearchParams(window.location.search);
        query.forEach((v, k) => {
            arr[k] = v;
        });
        return arr;
    }

    function updateDisplay(display) {
        let width = window.innerWidth, height = window.innerHeight;
        window.isMobile = isMobile;
        if (width > 768) {
            isMobile = false;
            navState = 1;
            EQuery(display.nav).addClass('default');
            EQuery(display.nav).removeClass('minimized');
            EQuery(display.nav).removeClass('hidden');
            
            for (let i = 0, arr = [display.main, display.topNav, display.topShadow];i < arr.length;i++) {
                EQuery(arr[i]).addClass('default');
                EQuery(arr[i]).removeClass('extended');
                EQuery(arr[i]).removeClass('full');
            }
        } else if (width > 600) {
            isMobile = true;
            navState = 0;
            EQuery(display.nav).removeClass('default');
            EQuery(display.nav).addClass('minimized');
            EQuery(display.nav).removeClass('hidden');

            for (let i = 0, arr = [display.main, display.topNav, display.topShadow];i < arr.length;i++) {
                EQuery(arr[i]).removeClass('default');
                EQuery(arr[i]).addClass('extended');
                EQuery(arr[i]).removeClass('full');
            }
        } else {
            isMobile = true;
            navState = -1;
            EQuery(display.nav).removeClass('default');
            EQuery(display.nav).removeClass('minimized');
            EQuery(display.nav).addClass('hidden');

            for (let i = 0, arr = [display.main, display.topNav, display.topShadow];i < arr.length;i++) {
                EQuery(arr[i]).removeClass('default');
                EQuery(arr[i]).removeClass('extended');
                EQuery(arr[i]).addClass('full');
            }
        }

        if (navState == 1) {
            EQuery(display.nav).addClass('default');
            EQuery(display.nav).removeClass('minimized');
            EQuery(display.nav).removeClass('hidden');

            for (let i = 0, arr = [display.main, display.topNav, display.topShadow];i < arr.length;i++) {
                if (mobile || isMobile) EQuery(arr[i]).addClass('default');
                else EQuery(arr[i]).removeClass('default');

                EQuery(arr[i]).removeClass('extended');
                EQuery(arr[i]).removeClass('full');
            }
        } else if (navState == 0) {
            EQuery(display.nav).removeClass('default');
            EQuery(display.nav).addClass('minimized');
            EQuery(display.nav).removeClass('hidden');

            for (let i = 0, arr = [display.main, display.topNav, display.topShadow];i < arr.length;i++) {
                EQuery(arr[i]).removeClass('default');
                EQuery(arr[i]).addClass('extended');
                EQuery(arr[i]).removeClass('full');
            }
        } else {
            EQuery(display.nav).removeClass('default');
            EQuery(display.nav).removeClass('minimized');
            EQuery(display.nav).addClass('hidden');

            for (let i = 0, arr = [display.main, display.topNav, display.topShadow];i < arr.length;i++) {
                EQuery(arr[i]).removeClass('default');
                EQuery(arr[i]).removeClass('extended');
                EQuery(arr[i]).addClass('full');
            }
        }

        if (isElectron) {
            EQuery(display.titleSplit).css('height: 32px');
            EQuery(display.titleSplit).addClass('visible');
            EQuery(display.main).addClass('has-corner');
            EQuery(display.mainSplit).css('height: calc(100% - 32px);top: 32px;')
        }
        
        /*
        if (offline) {
            if (!isElectron) {
                EQuery(display.offline).addClass('visible');
                EQuery(display.offline).removeChildren();
                EQuery(display.offline).addChild([offlineElt()]);
                EQuery(display.outerContainer).css('top: 25px;height: calc(100% - 25px)');
                EQuery(display.loginContainer).css('top: 25px;height: calc(100% - 25px)');

                if (isMobile) EQuery(display.mainSplitChat).css('top: 25px;height: calc(100% - 31px)');
            } else {
                EQuery(display.titleBar).find('.titlebar-center').removeChildren();
                EQuery(display.titleBar).find('.titlebar-center').addChild([offlineElt()]);
            }
        } else {
            EQuery(display.offline).removeClass('visible');
            EQuery(display.offline).removeChildren();
            EQuery(display.outerContainer).css('top: 0;height: 100%');
            EQuery(display.loginContainer).css('top: 0;height: 100%');
            EQuery(display.mainSplitChat).css('top: 0;height: calc(100% - 6px);');
        }

        EQuery(display.mainSplitChat).find('div:last-child').css('min-width: ' + toCssPx(width));*/
    }


    function addEventListeners(display) {
        EQuery('.ew_Cb.ew_Nf.ew_Vf.ew_Je.ew_3c').attr('href', '?route=settings/account');EQuery('.ew_jb.ew_Lf.ew_eb.ew_Qf').click(function () { window.location = '?route=settings/account' });
        
        EQuery('li[data-route]').click(function (e) {
            e.stopPropagation();
            e.preventDefault();
            EQuery(this).addClass('active');
            linkRoute(display, this);
        });

        EQuery('a[data-route]').click(function (e) {
            e.stopPropagation();
            e.preventDefault();
            let routeLink = linkRoute(display, this);
            if (routeLink !== undefined) {
                let routes = routeLink.split('/');
                if (routes[0] !== '') {
                    console.log(routes);
                }
            }
            routeDashboard(display);
        });

        EQuery('.toggle-nav').click(function () {
            if (isMobile) {
                if (navState == 1 || navState == 0) {navState = -1}
                else {navState = 1;}
            } else {
                if (navState == 1 || navState == -1) {navState = 0;}
                else {navState = 1;}
            }

            if (navState == 1) {
                EQuery(display.nav).addClass('default');
                EQuery(display.nav).removeClass('minimized');
                EQuery(display.nav).removeClass('hidden');

                for (let i = 0, arr = [display.main, display.topNav, display.topShadow];i < arr.length;i++) {
                    if (mobile || isMobile) EQuery(arr[i]).addClass('default');
                    else EQuery(arr[i]).removeClass('default');

                    EQuery(arr[i]).removeClass('extended');
                    EQuery(arr[i]).removeClass('full');
                }
            } else if (navState == 0) {
                EQuery(display.nav).removeClass('default');
                EQuery(display.nav).addClass('minimized');
                EQuery(display.nav).removeClass('hidden');

                for (let i = 0, arr = [display.main, display.topNav, display.topShadow];i < arr.length;i++) {
                    EQuery(arr[i]).removeClass('default');
                    EQuery(arr[i]).addClass('extended');
                    EQuery(arr[i]).removeClass('full');
                }
            } else {
                EQuery(display.nav).removeClass('default');
                EQuery(display.nav).removeClass('minimized');
                EQuery(display.nav).addClass('hidden');

                for (let i = 0, arr = [display.main, display.topNav, display.topShadow];i < arr.length;i++) {
                    EQuery(arr[i]).removeClass('default');
                    EQuery(arr[i]).removeClass('extended');
                    EQuery(arr[i]).addClass('full');
                }
            }
        });

        EQuery(display.filterInput).focus(function () {
            EQuery(display.nav).addClass('searchFocused');
        });

        EQuery(display.filterInput).blur(function () {
            if (EQuery(display.filterInput).val() === '' ) {
                EQuery(display.nav).removeClass('searchFocused');
            }
        });

        EQuery(display.exitSearchButton).click(function () {
            EQuery(display.filterInput).val('');
            updateFilter();
            EQuery(display.nav).removeClass('searchFocused');
        });

        EQuery(display.filterInput).on('input', function () {
            updateFilter(display);
        });

        EQuery('#user-id-btn').on('click', function () {
            EQuery('.paper-menu.css-11mxjog').show();
        });

        EQuery(window).click(function (e) {
            let elements = EQuery('.paper-menu.css-11mxjog, #user-id-btn, .paper-menu,css-11mxjog *:not(a), #user-id-btn *');
            let arr = [];
            for (let i = 0;i < elements.length;i++) {
                arr.push(e.target == elements[i]);
            };
            if (arr.indexOf(true) == -1) { EQuery('.paper-menu.css-11mxjog').hide(); }
        });

        EQuery(display.view).on(['scroll'], function () {
            if (display.view.scrollTop > 0) {
              EQuery(display.topShadow).addClass('has-shadow');
            } else {
              EQuery(display.topShadow).removeClass('has-shadow');
            }
          });
        
        EQuery(window).on('resize', function () {
            updateDisplay(display)
        });
    }

    function remainderQuery(d) {
        let query = extractQuery();
        let s = '';
        delete query[d];
        for (let key in query) {
            s += `&${key}=${query[key]}`;
        }
        return s;
    }

    function updateFilter(display) {
        let v = display.filterInput.value.trim();
        v = v.replace(/\s+/gi, ' ');
        let w = v + remainderQuery('q');
        if (v !== '') {
            window.history.replaceState({}, '', '?q=' + w + window.location.hash);
        } else {
            window.history.replaceState({}, '', '?q=' + remainderQuery('q') + window.location.hash);
        }
        const exp = new RegExp(v, 'gi');
        /*for ( const key in files ) {
            const section = files[ key ];
            for ( let i = 0; i < section.length; i ++ ) {
                filterExample( section[ i ], exp, tags );
            }
        }
        layoutList( files );*/
    }

    function linkRoute(display, elt) {
        EQuery('#dashboard-navigation li').removeClass('active');
        let v = EQuery(elt).attr('data-route');
        let w = v + remainderQuery('route');
        window.history.replaceState({}, '', '?route=' + w + window.location.hash);
        routeDashboard(display)
        return v;
    }

    function routeDashboard(display) {
        let receivedRoute = extractQuery().route;
        if (receivedRoute !== undefined) {
            let routes = receivedRoute.split('/');
            if (routes[0] !== '') {
                EQuery(display.navBtn[routes[0]]).addClass('active');
                EQuery('.dashboard-view').removeClass('active')
                EQuery(display.views[routes[0]]).addClass('active');
            }
            else {
                window.history.replaceState({}, '', '?route=dashboard/' + remainderQuery('route') + window.location.hash);
                window.location.reload();
            }
        } else {
            window.history.replaceState({}, '', '?route=dashboard/' + remainderQuery('route') + window.location.hash);
            window.location.reload();
        }
    }

    function Display() {
        this.views = { 
            'dashboard': EQuery('#dashboard-views #dashboard'),
            'courses': EQuery('#dashboard-views #courses'),
            'students': EQuery('#dashboard-views #students'),
            'settings': EQuery('#dashboard-views #settings'),
            'logout': EQuery('#dashboard-views #logout'),
        };
        this.navBtn = {
            'dashboard': EQuery('#dashboard-navigation li')[1],
            'courses': EQuery('#dashboard-navigation li')[2],
            'students': EQuery('#dashboard-navigation li')[3],
            'settings': EQuery('#dashboard-navigation li')[4],
            'logout': EQuery('#dashboard-navigation li')[5],
        };
        this.nav = EQuery('#dashboard-navigation')[0];
        this.filterInput = EQuery('#search-box')[0];
        this.view = EQuery('#dashboard-views')[0];
        this.topShadow = EQuery('.container-shadow')[0];
        this.topNav = EQuery('#dashboard-topbar')[0];
        this.main = EQuery('#dashboard-main')[0];
        this.mainSplit = EQuery('#main-split')[0];
        this.titleSplit = EQuery('#title-split')[0];

        if(isElectron) {
            EQuery(this.topShadow).css('top: 82px');
        }
    }

    EQuery(document).ready(function () {
        let display = window.display = new Display();
        display.filterInput.value = extractQuery().q || '';
        if (display.filterInput.value !== '') {
            EQuery(display.nav).addClass('searchFocused');
        }
        //updateFilter(files, tags);
        routeDashboard(display);
        updateDisplay(display);
        addEventListeners(display);
    });
})(this);