$('document').ready(function() {
    
    var previousScroll = 0;
    var exibe = false;
    
//    $('.icon').toggleClass('active');
    
    $(window).scroll(function(){
       var larguraTela = $(window).width();
       if(larguraTela < 750){
           var currentScroll = $(this).scrollTop();
           if (currentScroll > previousScroll){
               console.log("Scroll atual:"+ currentScroll);
               console.log("Scroll anterior:"+ previousScroll);
               $(".menu").css('top', '-270px');
               if (exibe) {
                   $('.icon').toggleClass('active');
               }
               exibe=false;
           } else {
               console.log("Scroll atual:"+ currentScroll);
               console.log("Scroll anterior:"+ previousScroll);
               $(".menu").css('top', '-220px');
               if (exibe) {
                   $('.icon').toggleClass('active');
               }
               exibe=false;
           }
           previousScroll = currentScroll;
       } else {
           if (currentScroll > previousScroll){
               $(".menu").css('top', '-55px');
           } else {
               $(".menu").css('top', '-55px');
           }
       }
    });
    
    $('.icon').click(function() {
        if (!exibe) {
            $('.menu').css('top', '0px');
            exibe=true;
            $('.icon').toggleClass('active');
        } else if (exibe){
            $('.menu').css('top', '-220px');
            exibe=false;
            $('.icon').toggleClass('active');
        }
    });
    
    $('#cardapio').click(function() {
        var larguraTela = $(window).width();
        if(larguraTela < 750){
            exibe=false;
            $('.icon').toggleClass('active');
        }
        $('html, body').animate({
              scrollTop: $(".cardapio").offset().top
        }, 1000);
    });
    
    $('#sobre').click(function() {
        var larguraTela = $(window).width();
        if(larguraTela < 750){
            exibe=false;
            $('.icon').toggleClass('active');
        }
        $('html, body').animate({
              scrollTop: $(".history").offset().top
        }, 1000);
    });
    
    $('#qualidade').click(function() {
        var larguraTela = $(window).width();
        if(larguraTela < 750){
            exibe=false;
            $('.icon').toggleClass('active');
        }
        $('html, body').animate({
              scrollTop: $(".qualidade").offset().top
        }, 1000);
    });
    
});

