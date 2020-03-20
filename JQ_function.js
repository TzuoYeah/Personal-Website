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
    /**
     * 自我介紹(About me)->技能欄位(Skill)->學生時期 ->現況
     */
    $(sel).append("<h2>");
    $(sel).append("<p>");
    $("h2:last").text("About");
    $("p:last").css({'white-space':'pre-line'})
    $("p:last").text("我是時源，不過大家都叫我十元，或雜摳。來自台中，畢業於國立臺中科技大學資訊工程學系。\n\
    興趣是音樂及藝術，休閒愛好爬山，而資訊領域是我的專業。\n\
    我認為軟體設計是門藝術，刁鑽的編程是一種磨練，我的專業本身便是愛好及休閒。");

    $(sel).append("<h2>");
    $(sel).append("<p>");
    $("h2:last").text("Skill");
    $("p:last").text("Programming + DB + DevOps + Other(可能要兩列div)");
    
}

function works(sel){
    $(sel).append("<h2>");
    $(sel).append("<p>");
    $("h2").text("作品");
    $("p").text("自己做卡片");
    
}