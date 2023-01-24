$(document).ready(function () {
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
    // let swiper2 = new Swiper(".per_banner", {
    //     slidesPerView: 5,

    //     spaceBetween: 20, // 각 판 사이의 margin
    //     pagination: {
    //         el: ".swiper-pagination",
    //         clickable: true, // 인디케이터 클릭 동작 여부 설정. 
    //         type: 'bullets', // 'bulltes, fraction, progressbar'
    //     },
    //     navigation: {
    //         nextEl: ".swiper-button-next",
    //         prevEl: ".swiper-button-prev",
    //     },
    //     autoplay: {
    //         delay: 1500, // 1.5 초마다 새 판 들어온다
    //         pauseOnMouseEnter: true, // 마우스 호버되면 멈춤
    //     },
    //     speed: 1000, // 판 들어오기 시작해서 도착하는 시간
    //     // loop: true,
    // });
    $(function () {
        $(".close").click(function () {
            $(".notice_window").fadeOut();
        });
        return false;
    });
    for (let i = 0; i < 6; i++) {
        let make_banner = `<div class="swiper-slide banner">
            <img src="./img/banner/banner${i}.webp" />
        </div>`
        $(".main_banner .swiper-wrapper").append(make_banner);
    }
    for (let i = 0; i < 9; i++) {
        let make_slider = `<div class="swiper-slide slide_cover">
                        <div class="slide_img_box">
                            <div class="slide_img1"><img src="./img/slide/slide${i + 1}-1.webp" alt=""></div>
                            <div class="slide_img2"><img src="./img/slide/slide${i + 1}-2.webp" alt=""></div>
                        </div>
                        <div class="slide_txt_box">
                            <div class="slide_name">이것은 상의</div>
                            <div class="slide_price">9999999원</div>
                        </div>
                    </div>`
        $(".per_banner .swiper-wrapper").append(make_slider)
    }
    $(".slide_cover").click(function () {
        $(location).attr("href", "item.html")
    })


    let ww = window.innerWidth
    function resposiveSwiper() {
        if (ww >= 1000) {
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
        }
        else if (ww < 1000 && ww > 700) {
            swiper2 = new Swiper(".per_banner", {
                slidesPerView: 3,
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
        }
        else if (ww < 700) {
            swiper2 = new Swiper(".per_banner", {
                slidesPerView: 2,
                spaceBetween: 20,
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
        }
    }
    $(window).resize(function () {
        ww = window.innerWidth;
        resposiveSwiper();
    })
    resposiveSwiper();
})