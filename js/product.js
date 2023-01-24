$(document).ready(function () {
    for (let i = 1; i <= 15; i++) {
        let put_contain = `<div class="contain_box">
                <div class="contain_img_box">
                    <div class="contain_img1"><img src="./img/product/product${i}-1.webp"></div>
                    <div class="contain_img2"><img src="./img/product/product${i}-2.webp"></div>
                </div>
                <div class="contain_txt_box">
                    <div class="contain_txt1">HERE GOES NAME</div>
                    <div class="contain_txt2">999,999원</div>
                </div>
            </div>`
        $(".contain_wrap").append(put_contain);
    }
    // console.log($(".photo").length)
    let count = 1;
    $(window).scroll(function () {
        let scroll_bottom = $(window).scrollTop() + $(window).height()
        let footer_top = $('footer').offset().top;

        if (count < 4 && scroll_bottom >= footer_top) {
            for (let i = 1; i <= 3; i++) {
                // $('.container').append(`<li class="item"></li>`)
                $(`<div class="contain_box">
                <div class="contain_img_box">
                    <div class="contain_img1"><img src="./img/product/product${i}-1.webp"></div>
                    <div class="contain_img2"><img src="./img/product/product${i}-2.webp"></div>
                </div>
                <div class="contain_txt_box">
                    <div class="contain_txt1">HERE GOES NAME</div>
                    <div class="contain_txt2">999,999원</div>
                </div>
            </div>`).appendTo('.contain_wrap')
            }
            count += 1;
            item_txt_effect()
        }
    })
    item_txt_effect()
    function item_txt_effect() {
        $(".contain_box").click(function () {
            $(location).attr("href", "item.html")
        })
        $(".contain_box").mouseenter(function () {
            $(".contain_txt_box").css({
                opacity: "0"
            })
            $(this).find($(".contain_txt_box")).css({
                opacity: "1"
            })
        })
        $(".contain_box").mouseleave(function () {
            $(".contain_txt_box").css({
                opacity: "0"
            })
        })
    }
})