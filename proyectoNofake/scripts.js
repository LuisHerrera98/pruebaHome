jQuery('document').ready(function($){
    var menuBton = $('.menu-icon'),
    menu = $ ('.nav ul');


    menuBton.click(function(){

        if(menu.hasClass('show')){
            menu.removeClass('show');
        }else {
            menu.addClass('show');
        }

    });
});
