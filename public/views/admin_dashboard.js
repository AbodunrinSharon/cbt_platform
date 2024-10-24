(function () {
    const EQuery = window.EQuery;

    let openNav = true;

    function addEventListeners() {
        EQuery('#dashboard-navigation li').click(function () {
            EQuery('#dashboard-navigation li').removeClass('active');
            EQuery(this).addClass('active');
        });

        EQuery('.toggle-nav').click(function () {
            if (openNav) {
                EQuery('#dashboard-navigation').addClass('minimized');
                EQuery('#dashboard-main').addClass('extended');
                openNav = false;
            } else {
                EQuery('#dashboard-navigation').removeClass('minimized');
                EQuery('#dashboard-main').removeClass('extended');
                openNav = true;
            }
        })
    }

    EQuery(document).ready(function () {
        addEventListeners();
    })
})(this);