EQuery(function () {
    EQuery(window).on('load', function () {
        var height = window.innerHeight - 110;
        EQuery('main').css(`min-height: ${height}px;width: ${window.innerWidth}px`);
        EQuery('footer').css(`width: ${window.innerWidth}px`);
    });
  
    EQuery(window).on('resize', function () {
        var height = window.innerHeight - 110;
        EQuery('main').css(`min-height: ${height}px;width: ${window.innerWidth}px`);
        EQuery('footer').css(`width: ${window.innerWidth}px`);
    });
});