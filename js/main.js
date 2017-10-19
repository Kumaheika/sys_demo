$(function () {
    // 瀏覽器寬度
    var $wdth = $(window).width();
    // pad 斷點
    var $pad_break = 1024;

    // 判斷裝置寬度
    $(window).resize(function() {
        $wdth = $(window).width();
        console.log($wdth);
    });

    // menu 邏輯操作
    var $sidebar = $('.sidebar'),
        $menu = $('.menu'),
        $menu_btn = $menu.children('.menu_btn'),
        $content = $('.content'),
        $content_con = $content.find('.container-fluid');

    // menu 點按後執行該 toggle_con
    $menu_btn.each(function (index) {
        $(this).on('click', { id: index }, toggle_con);
    });
    function toggle_con(e) {
        // alert(e.data.id);
        var $num = e.data.id;
        // pad 寬度下執行
        if($wdth <= $pad_break) {
            if($(this).hasClass("active")) {
                $(this).removeClass('active');
                $sidebar.removeClass('active');
            } else {
                $menu_btn.removeClass('active');
                $(this).addClass('active');
                $sidebar.addClass('active');
                $content_con.find('.row').removeClass('active');
                $content_con.find('.row').eq($num).addClass('active');
            }
        // 大於 pad 寬度下執行
        } else if($wdth > $pad_break) {
            $menu_btn.removeClass('active');
            $(this).addClass('active');
            $content_con.find('.row').removeClass('active');
            $content_con.find('.row').eq($num).addClass('active');
        }
    }

    // panel control 物件操作
    var $panel_compo = $('.panel_compo'),
        $panel_btn = $panel_compo.find('.panel_item');

    $panel_btn.each(function (index) {
        $(this).on('click', { id: index }, toggle_panel);
    });
    function toggle_panel(e) {
        // alert(e.data.id);
        var $num = e.data.id;
        $panel_btn.removeClass('active');
        $(this).addClass('active');
    }
})