$(document).ready(function(ev){

    $('nav>li').click(function(ev){
        ev.stopPropagation();
        $(this).children('ul').fadeIn();
        // when I will click twic on the li in order to close
        $("li.mark").children('ul').fadeOut();
        $(this).toggleClass('mark');  
    })

    $(document).click(function (ev) {
        $("ul").fadeOut(); 
        $("li.mark").removeClass('mark');
    })

   









})






















