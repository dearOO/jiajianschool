$(function() {
    var code = 9999;

    function codes() {

        var ranColor = '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6); //随机生成颜色
        // alert(ranColor)
        var ranColor2 = '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
        var num1 = Math.floor(Math.random() * 20+1);
        var num2 = Math.floor(Math.random() * 30+1);
        code = num1 + num2;

        $("#code").html(num1 + "+" + num2 + "=?");
        if ($("#code").hasClass("nocode")) {
            $("#code").removeClass("nocode");
            $("#code").addClass("code");

        }
        $("#code").css('background', ranColor);
        $("#code").css('color', ranColor2);

    }
    codes()

    $("#code").on('click', codes)

    $("#check").click(function() {
        console.log($(".input").val())
        if ($(".input").val() == code && code != 9999) {
            // alert("正确!");
        } else if($(".input").val() == '' ){
            alert("请输入验证码")
        }else {
            alert("算错了哟!");
        }
    });
});