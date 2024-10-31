self.track = function(b, a) {
    self.prepareDb(function(e) {
        var d = e.transaction(["settings"], "readwrite").objectStore("settings").get("config");
        d.onsuccess = function(c) {
            c = {};
            a.data && a.data.event_properties && (c = a.data.event_properties);
            c.status = b;
            c = {
                commands: [{
                    name: "crm/events",
                    data: {
                        customer_ids: d.result.customer,
                        company_id: d.result.token,
                        type: "campaign",
                        age: 0.1,
                        properties: c,
                        timestamp: Date.now() / 1E3
                    }
                }]
            };
            fetch(d.result.target + "/bulk", {
                method: "post",
                headers: {
                    "Content-type": "text/plain;charset=UTF-8"
                },
                mode: "no-cors",
                body: JSON.stringify(c)
            })["catch"](function(a) {})
        }
    })
}
;
self.prepareDb = function(b) {
    var a = indexedDB.open("exponea", 1);
    a.onupgradeneeded = function(a) {
        a.target.result.createObjectStore("settings", {
            keyPath: "key"
        })
    }
    ;
    a.onsuccess = function(a) {
        b(a.target.result)
    }
}
;
self.addEventListener("push", function(b) {
    if (b.data) {
        var a = b.data.json();
        a.message && (a.body = a.message);
        void 0 === a.data && (a.data = {});
        a.url && (a.data.url = a.url);
        a.event_properties && (a.data.event_properties = a.event_properties);
        b.waitUntil(Promise.all([self.registration.showNotification(a.title, a), self.track("delivered", a)]))
    }
});
self.addEventListener("notificationclick", function(b) {
    b.notification.close();
    var a = Promise.resolve();
    b.action && (a = clients.openWindow(b.action));
    !b.action && b.notification.data && b.notification.data.url && (a = clients.openWindow(b.notification.data.url));
    b.waitUntil(Promise.all([a, self.track("clicked", b.notification)]))
});
self.addEventListener("notificationclose", function(b) {
    b.waitUntil(Promise.all([self.track("closed", b.notification)]))
});
