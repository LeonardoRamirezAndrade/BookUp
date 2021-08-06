$(document).ready(function(){
    $('.ir-arriba').click(function(){
        $('body, html').animate({
            scrollTop: '0px'
        });
    });

    $(window).scroll(function(){
        if( $(this).scrollTop() > 0){
            $('.ir-arriba').slideDown();
        } else {
            $('.ir-arriba').slideUp();
        }
    });

});
//Estas 17 lineas explican la función de ir al cielo