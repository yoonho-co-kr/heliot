$(document).ready(function () {

    let tab = document.getElementsByClassName('tab');
    let pan = document.getElementsByClassName('pan');
    // pan[0].classList.add('active')

    // 탭버튼 클릭시 탭 변경
    for (let i = 0; i < tab.length; i++) {
        tab[i].addEventListener('click', function () {

            for (let j = 0; j < tab.length; j++) {
                pan[j].classList.remove('active')
            }

            pan[i].classList.add('active')
        })
    }
    $(".tab").click(function () {
        $(".tab").css({
            color: "grey",
            fontWeight: "400"
        })
        $(this).css({
            color: "black",
            fontWeight: "700"
        })
    })
    let left_height = $(".left").height();
    let right_height = 620;
    $(window).scroll(function () {
        let scrollTop = $(window).scrollTop()
        let footer_top = $('footer').offset().top;
        let scroll_bottom = $(window).scrollTop() + $(window).height()
        if (scrollTop > 0) {
            $(".right").css({
                position: "relative"
            })
            $(".item_desc_box").css({
                position: "fixed",
                top: "180px"
            })

            if (scroll_bottom >= footer_top) {
                $(".item_desc_box").css({
                    position: "absolute",
                    top: left_height - right_height,
                    // bottom: "0px"
                })
            }
        }
    })
    let name = ["Top in Cashmere"]
    let load_color = ["white", "black",]
    let load_size = ["s", "m", "l"]
    for (let i = 0; i < load_color.length; i++) {
        let put_color = `<div class="${load_color[i]} color"></div>`
        $(".val_color").append(put_color)
        $(".val_color div").eq(i).css({
            backgroundColor: `${load_color[i]}`,
        })
    }
    if (left_height)
        console.log()
    // for (let i = 0; i < load_size.length; i++) {
    //     let put_size = `<div class="${load_size[i]} size">${load_size[i].toUpperCase()}</div>`
    //     $(".val_size").append(put_size)

    // }


    $('.color').click(function () {
        // 클릭할 당시의 리스크 알맹이 개수
        let list_count = $('.selected_sec').children().length;
        // 현재 클릭한 버튼의 아이디
        let tmp_id = $(this).attr("class");

        // 리스트에 한개라도 있으면
        if (list_count > 0) {
            let class_dupl_chk = false; // 이미 있을때-true, 없으면-false

            // 리스트 개수만큼 돌면서 현재 클릭한 버튼 관련된게 있는지 확인
            for (let i = 0; i < list_count; i++) {
                class_dupl_chk = $('.selected_sec').children('.sel_color_box').eq(i).hasClass(tmp_id);

                if (class_dupl_chk) break;
            }

            if (class_dupl_chk) {
                alert("이미 선택한 옵션 입니다.")
            }
            else {
                make_opt_list(tmp_id)
            }
        }
        // 처음. 리스트에 하나도 없는 경우
        else {
            make_opt_list(tmp_id, $(this).eq())
        }

        // $('#p_tot').text($('.txt_qty').val() * rs.s_price + "원");
        // total();

    });
    $(document).on('click', '.btn_qty', function () {
        qty_chg($(this).val(), $(this));
        // total();
    })
    $(document).on('click', '.btn_price_delete', function () {
        $(this).parent().parent('.sel_color_box').remove();
        // total();
    })

    function make_opt_list(tmp_id,) {
        $('.selected_sec').append(
            `<div class="sel_color_box ${tmp_id}"> 
                <div class="opt_name">
                    <div>${name[0]} - ${tmp_id.toUpperCase()}</div >
                </div >
        <div class="opt_qty">
            <input type="button" class="btn_qty txt_minus" value="-">
                <input type="text" class="txt_qty" value="1" readonly>
                    <input type="button" class="btn_qty txt_plus" value="+">
                        <img src="./img/btn_price_delete.gif" alt="" class="btn_price_delete">
                            <input type="text" value="${$(this).index()}" title="해당 아이템 방번호" class="chk_item_order">
                            </div>
                        </div>`
        );
    }

    function qty_chg(tmp_mark, el) {

        if (tmp_mark == "+") {

            let curr_qty = +el.prev().val();
            el.prev().val(curr_qty + 1)
        }
        else if (tmp_mark == "-") {
            console.log(el.next()) // '.txt_qty'

            let curr_qty = +el.next().val();

            if (curr_qty - 1 < 1) {
                alert("최소 주문 수량은 1개 입니다.");
            }
            else {
                el.next().val(curr_qty - 1)
            }
        }
    }

})