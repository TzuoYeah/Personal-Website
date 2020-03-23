$(document).ready(function(){
    var display="#display";
    init(display);
    $("a").click(function(){
        let id = $(this).attr("id");
        seletePage(id);
    });
});
function init(sel){
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
    $("img").attr({src:"180x180-2.png"});
    $("h2").text("十元");
    $("p").text("\"簡介簡介簡介簡介\"");
}

function about(sel){
    /**
     * 自我介紹(About me)->技能欄位(Skill)->學生時期 ->現況
     */
    //------------------------Ｂ１
    let PAGE = $(sel);
    PAGE.append("<h2>");
    PAGE.append("<p>");
    let aboutTitle = $("h2:last");
    let content = $("p:last");
    let contentStyle = {'white-space':'pre-line','text-align':'center'};

    aboutTitle.text("About").css({'text-align':'center'});
    content.css(contentStyle).text("XXXXXXXXXX\n\
    OOOOOOOOOO");


    //------------------------Ｂ２
    let cardStyle = {
        'display':'inline-block',
        'position':'relative',
        'margin':'5px',
        'width':'300px',
        'height':'400px',
        'background-color':' rgb(206, 206, 206)'
        //'border':'1px solid black'
    };
    let card1,card2,card3;
    PAGE.append("<h2>");
    let B2h2 = $("h2:last");
    PAGE.append("<div>");
    let B2div= $("div:last");

    B2h2.text("Skill").css({'text-align':'center'});
    B2div.css({'text-align':'center'});

    B2div.append("<div>");
    card1 = $("div:last");
    B2div.append("<div>");
    card2 = $("div:last");
    B2div.append("<div>");
    card3 = $("div:last");

    card1.css(cardStyle);
    card2.css(cardStyle);
    card3.css(cardStyle);


    //------------------------Ｂ３
    let blockStyle3 = {
        'display':'block',
        'position':'relative',
        "width":"100%",
        "height":"540px",
        'background-color':' rgb(206, 206, 206)'
        //"border":"1px solid black"
    };
    PAGE.append("<h2>");
    $("h2:last").text("第三項").css({'text-align':'center'});//經歷
    
    PAGE.append("<div>");
    $("div:last").attr({id:'block3'}).css({'margin':'40px 0px'}); 
    let block3 = $("#block3");

    block3.append("<div>");
    $("div:last").css(blockStyle3);
    /**
     * 我是時源，大家都叫我十元。來自台中，畢業於國立臺中科技大學資訊工程學系。\n\
    興趣是音樂及藝術，休閒愛好爬山，資訊領域是我的專業。\n\
    對我而言軟體設計是門藝術，刁鑽的編程是一種磨練，所以我熱愛我的專業。
     */
}

function works(sel){
    $(sel).append("<h2>");
    $(sel).append("<p>");
    $("h2").text("作品");
    $("p").text("自己做卡片");
    
    $(sel).append("<div>");
    $("div:last").css({
        "display":"inline-block",
        "width":"30px",
        "height":"30px",
        "border":"1px solid black"
    });

    $(sel).append("<div>");
    $("div:last").css({
        "display":"inline-block",
        "width":"30px",
        "height":"30px",
        "border":"1px solid black"
    });

    $(sel).append("<div>");
    $("div:last").css({
        "display":"inline-block",
        "width":"30px",
        "height":"30px",
        "border":"1px solid black"
    });
}