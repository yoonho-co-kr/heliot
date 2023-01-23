$(document).ready(function () {
    $("#login_btn").click(function () {
        // console.log($("#id").val().length)
        // console.log($("#pw").val().length)

        if ($("#id").val().length <= 6 || $("#pw").val().length <= 8) {
            alert("아이디 및 비밀번호를 확인해주세요")
        }
    }
    )
    $(".login").click(function () {
        $(location).attr("href", "login.html")
    })
    $(".join, #join_btn").click(function () {
        $(location).attr("href", "join.html")
    })
})
