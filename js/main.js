$(function () {
    $menu = $('.menu'),
    $menu_btn = $menu.children('.menu_btn'),
    $content = $('.content'),
    $content_con = $content.find('.container-fluid');

    $menu_btn.each(function (index) {
        $(this).on('click',{id:index}, toggle_con);
    });
    function toggle_con (e) {
        // alert(e.data.id);
        $num = e.data.id;
        $menu_btn.removeClass('active');
        $(this).addClass('active');
        $content_con.find('.row').removeClass('active');
        $content_con.find('.row').eq($num).addClass('active');
    }

    //物件操作panel control
    var $panel_compo = $('.panel_compo'),
        $panel_btn = $panel_compo.find('.panel_item');
    $panel_btn.each(function (index) {
        $(this).on('click',{id:index}, toggle_panel);
    });
    function toggle_panel (e) {
        // alert(e.data.id);
        $num = e.data.id;
        $panel_btn.removeClass('active');
        $(this).addClass('active');
    }
})