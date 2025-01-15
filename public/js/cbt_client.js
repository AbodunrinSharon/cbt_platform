(function (window$1) {
    'use strict';
    let EQuery = window$1.EQuery;
    let loginPath = '/views/student_login.html';
    let testPath = '/views/student_test.html';

    function getAttributes(elt) {
        elt = typeof elt == 'string' ? getElemt(elt) : elt;
        let obj = {};
        if (elt && elt.attributes && elt.attributes.length > 0) {
            let attrs = elt.attributes;

            for (let i = attrs.length - 1; i >= 0; i--) {
                let attrName = attrs[i].name;
                let attrVal = attrs[i].value;

                if (typeof elt[attrName] === 'boolean') {
                    attrVal = attrVal !== null ? true : false;
                }

                obj[attrName] = attrVal;
            }
        }

        return obj;
    }

    function extractQuery() {
        let arr = {};
        let query = new URLSearchParams(window.location.search);
        query.forEach((v, k) => {
            arr[k] = v;
        });
        return arr;
    }

    function extractHTML(file) {
        if (file) {
            let opt = {content: '', scripts: []};

            fetch(file).then(q => q.text()).then(function (response) {
                let frame = EQuery.elemt('iframe', null, null, null, 'display: none');
                EQuery(document.body).addChild([frame]);
                var ifr = frame.contentDocument;
                

                ifr.open();
                ifr.write(response);

                setTimeout(async function () {
                    if (ifr.body) {
                        ifr.body.contentEditable = true;
                        ifr.body.contentEditable = false;
                        opt.content = ifr.body.innerHTML;
                    }

                    let scripts = EQuery(ifr).find('script');
                    for (let i = 0;i < scripts.length;i++) {
                        if (getAttributes(scripts[i]).src !== undefined) {
                            await fetch(getAttributes(scripts[i]).src).then(res => res.text()).then(function (data) {
                                opt.scripts.push(data);
                            }).catch(console.log);
                        } else if (scripts[i].innerText !== '') {
                            opt.scripts.push(scripts[i].innerText);
                        }
                    }
                    console.log(opt)
                    return opt;
                }, 500);
            });
        }
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

    function linkRoute(display, elt) {
        EQuery('#dashboard-navigation li').removeClass('active');
        let v = EQuery(elt).attr('data-route');
        let w = v + remainderQuery('route');
        window.history.replaceState({}, '', '?route=' + w + window.location.hash);
        routePage(display)
        return v;
    }

    function routePage(display) {
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

    let q = extractQuery();
    if (JSON.stringify(q) == '{}') {
        console.log(extractHTML(loginPath));
    }
})(this);