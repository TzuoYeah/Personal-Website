$(document).ready(function(){
    var display="#display";
    setting(display);
    $("a").click(function(){
        let id = $(this).attr("id");
        seletePage(id);
    });
});
function setting(sel){
    if(location.hash=="#about"){
        about(sel);
    }else if(location.hash=="#works"){
        works(sel);
    }else{
        home(sel);
    }
}
function seletePage(id){
    if(id =="a_about"){
        $(display).children().remove();
        about(display);
    }else if(id == "a_works"){
        $(display).children().remove();
        works(display);
    }else{
        $(display).children().remove();
        home(display);
    }
}
function home(sel){
    $(sel).append("<img>");
    $(sel).append("<h2>");
    $(sel).append("<p>");
    $("img").attr({src:"180x180.png"});
    $("h2").text("十元");
    $("p").text("\"簡介簡介簡介簡介\"");
}

function about(sel){
    $(sel).append("<h2>");
    $(sel).append("<h3>");
    $(sel).append("<p>");
    $("h2").text("關於");
    $("h3").text("經歷");
    $("p").text("文字文字");
    
}

function works(sel){
    $(sel).append("<h2>");
    $(sel).append("<p>");
    $("h2").text("作品");
    $("p").text("自己做卡片");
    
}