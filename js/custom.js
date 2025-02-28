$(function () {
    var swiper = new Swiper(".main_visual_slide", {
        loop: true,
        autoplay: {
            delay: 8000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".arrows_right",
            prevEl: ".arrows_left",
        },

    });

})
$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        if (sct > 0) {
            $('header').addClass('on')
        } else {
            $('header').removeClass('on')
        }
    })
})
$(function () {
    $('.main_content .tab_menu button').on('click', function (e) {
        let idx = $(this).parent().index();
        $('.main_content .tab_menu button').removeClass('on')
        $(this).addClass('on')
        $('.main_content .tab_content .con').removeClass('on')
        $('.main_content .tab_content .con').eq(idx).addClass('on')

    })
})

