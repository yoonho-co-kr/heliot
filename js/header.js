$(document).ready(function () {
    $(window).scroll(function () {
        let s_top = $(window).scrollTop();
        if (s_top > 0) {

        }

    })
    let make_header = `<div class="header_wrap">
            <ul class="menu_sec">
                <li>STORE
                    <div class="sub_menu">
                        <ul>
                            <li><a href="./product.html">OUTERWEAR</a></li>
                            <li><a href="./product.html">TOP</a></li>
                            <li><a href="./product.html">BOTTOM</a></li>
                            <li><a href="./product.html">DRESS SKIRT</a></li>
                            <li><a href="./product.html">ACCESSORIES</a></li>
                        </ul>
                    </div>
                </li>
                <li>NEW ARRIVALS</li>
                <li>COLLECTION
                    <div class="sub_menu">
                        <ul>
                            <li>2022 S/S COLLECTION</li>
                            <li>2022 F/W COLLECTION</li>
                        </ul>
                    </div>
                </li>
                <li>ABOUT US</li>
                <li>NEWS</li>
            </ul>
            <ul class="logo_sec">
                <li><a href="index.html">
                    <img src="https://cdn.shopify.com/s/files/1/0185/6238/t/25/assets/logo-new.svg?v=93111652546430656431668080501"
                        alt="">
                        </a>
                </li>
            </ul>
            <ul class="account_sec">
                <li>COMMUNITY
                    <div class="sub_menu">
                        <ul>
                            <li>NOTICE</li>
                            <li>REVIEW</li>
                            <li>Q&A</li>
                        </ul>
                    </div>
                </li>
                <li>ACCOUNT</li>
                <li>MY PAGE</li>
                <li>SEARCH</li>
                <li>BAG</li>
            </ul>
        </div>`
    $("header").append(make_header)

    let make_footer = `<div class="footer1">
                <ul>
                    <li>INSTAGRAM</li>
                    <li>BLOG</li>
                    <li>KAKAOTALK</li>
                </ul>
            </div>
            <div class="footer2">
                <ul>
                    <li>TERMS OF USE</li>
                    <li>PRIVACY POLICY</li>
                    <li>SHOP GUIDE</li>
                </ul>
            </div>
            <div class="footer3">
                <ul>
                    <li>COMPANY: REPUBLIC OF KOREA
                        &nbsp; OWNER: YOONHO</li>
                    <li>OFFICE: 010-9912-4255
                        &nbsp;FAX: NONE
                        &nbsp; E-MAIL: hunk92@naver.com</li>
                    <li>BUSINESS NUMBER: 123-45-67890
                        &nbsp; MAIL-ORDER LICENSE:2023-EEEE-12345</li>
                    <li>ADDRESS: 03048, 1, Cheongwadae-ro, Jongno-gu, Seoul, Republic of Korea
                        of Korea </li>
                    <li>개인정보보호책임자: YOONHO(hunk92@naver.com)</li>
                    <li>Copyright yoonho.co.kr All rights reserved.</li>
                </ul>
            </div>`
    $("footer").append(make_footer)
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


})