$(document).ready(function () {
    $(window).scroll(function () {
        let s_top = $(window).scrollTop();
        if (s_top > 0) {

        }

    })

    $(".menu_sec li, .account_sec li, .sub_menu ul li").mouseenter(function () {
        $(".menu_sec li, .account_sec li").css({
            color: "black"
        })
        $(this).css({
            color: "grey"
        })
        $(".overwrap").css({
            display: "block",
            opacity: "0.8"
        })
    })
    $(".menu_sec li, .account_sec li").mouseleave(function () {
        $(".menu_sec li, .account_sec li").css({
            color: "black"
        })
        $(".overwrap").css({
            opacity: "0",
            display: "none"
        })
    })

    var swiper1 = new Swiper(".main_banner", {
        spaceBetween: 30,
        effect: "fade",
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    let swiper2 = new Swiper(".per_banner", {
        slidesPerView: 5,
        spaceBetween: 20, // 각 판 사이의 margin
        pagination: {
            el: ".swiper-pagination",
            clickable: true, // 인디케이터 클릭 동작 여부 설정. 
            type: 'bullets', // 'bulltes, fraction, progressbar'
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 1500, // 1.5 초마다 새 판 들어온다
            pauseOnMouseEnter: true, // 마우스 호버되면 멈춤
        },
        speed: 1000, // 판 들어오기 시작해서 도착하는 시간
        // loop: true,
    });
    $(function () {
        $(".close").click(function () {
            $(".notice_window").fadeOut();
        });
        return false;
    });
})