$(document).ready(function() {
    $('.wrapper').addClass('active');
    });

    

    $(document).ready(function () {
        $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
        });
    });    

    $('.arrow').click(function() {
        var target = $('.content');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    });

    $(document).ready(function() {
        $('.slider').slick({
            dots: true,
            arrows: true,
            slidesToShow:3,
            speed: 400,
            adaptiveHeight:false,
            autoplay:true,
            autoplaySpeed: 700,
            centerMode:false
    
        });
    });    