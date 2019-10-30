$(document).ready(function () {
        //要寫程式的地方
        //這個功能是點擊含有 close class 的元素之後"隱藏/顯示"含有 service class 的元素
        $(".close").click(function () {
            $(".service").fadeToggle();
        });
    });