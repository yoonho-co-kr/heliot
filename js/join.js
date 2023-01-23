$(document).ready(function () {
    $("#join_btn").click(function () {
        console.log($("#id").val().length)
        $(".error_msg").empty()
        // console.log($("#pw").val().length)
        // $(".error_msg").eq(0).text("입력한 아이디를 확인해주세요")
        if ($("#id").val().length < 5 || $("#id").val().length > 15) {
            $(".error_msg").eq(0).text("입력한 아이디를 확인해주세요")
        }
        if ($("#pw").val().length < 8) {
            $(".error_msg").eq(1).text("입력한 비밀번호를 확인해주세요")
        }
        if ($("#pw_chk").val().length < 8) {
            $(".error_msg").eq(2).text("입력한 비밀번호를 확인해주세요")
        }
        if ($("#pw_chk").val() != $("#pw").val()) {
            $(".error_msg").eq(2).text("비밀번호가 동일하지 않습니다.")
        }
    }
    )
    $(".login").click(function () {
        $(location).attr("href", "login.html")
    })
    $(".join").click(function () {
        $(location).attr("href", "join.html")
    })
})
