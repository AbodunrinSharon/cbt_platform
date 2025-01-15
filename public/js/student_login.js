(function () {
    var userAgent = navigator.userAgent;
    var platform = navigator.platform;
    var edge = /Edge\/(\d+)/.exec(userAgent);
    var ios = !edge && /AppleWebKit/.test(userAgent) && /Mobile\/\w+/.test(userAgent);
    var android = /Android/.test(userAgent);
    var mobile = ios || android || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(userAgent);

    if (mobile) {
        EQuery('body').html('<div class="modal e-tomato e-text-black container" style="display: block"><div class="modal-content e-round-22 e-shadow"><div class="container">Access denied</div></div></div>')
    }

    EQuery(window).on('load', function () {
        var height = window.innerHeight - 110;
        EQuery('main').css(`min-height: ${height}px;`);
    });
  
    EQuery(window).on('resize', function () {
        var height = window.innerHeight - 110;
        EQuery('main').css(`min-height: ${height}px;`);
    });
})(window);