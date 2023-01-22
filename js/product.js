$(document).ready(function () {
    for (let i = 0; i < 12; i++) {
        let put_contain = `<a href="./item.html"><div class="contain_box">
                <div class="contain_img_box">
                    <div class="contain_img1">PICTURE</div>
                    <div class="contain_img2"></div>
                </div>
                <div class="contain_txt_box">
                    <div class="contain_txt1">HERE GOES NAME</div>
                    <div class="contain_txt2">999,999원</div>
                </div>
            </div></a>`
        $(".contain_wrap").append(put_contain);
    }
    // console.log($(".photo").length)
    let count = 1;
    $(window).scroll(function () {
        let scroll_bottom = $(window).scrollTop() + $(window).height()
        let footer_top = $('footer').offset().top;

        if (count < 4 && scroll_bottom >= footer_top) {
            for (let i = 0; i < 3; i++) {
                // $('.container').append(`<li class="item"></li>`)
                $(`<a href="./item.html"><div class="contain_box">
                <div class="contain_img_box">
                    <div class="contain_img1">PICTURE</div>
                    <div class="contain_img2"></div>
                </div>
                <div class="contain_txt_box">
                    <div class="contain_txt1">HERE GOES NAME</div>
                    <div class="contain_txt2">999,999원</div>
                </div>
            </div></a>`).appendTo('.contain_wrap')
            }
            count += 1;
            // photo_click()
            $(".photo").mouseenter(function () {
                $(this).children().css({
                    scale: "1.2"
                })
            })
            $(".photo").mouseleave(function () {
                $(".photo").children().css({
                    scale: "1"
                })
            })
        }
    })
})