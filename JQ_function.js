$(document).ready(function(){
    allHide();
    $("#bt1").click(function(){
        allHide();
        $("#con1").show();
    });
    $("#bt2").click(function(){
        allHide();
        $("#con2").show();
    });
});

function allHide(){
    $(".content").hide();
}