$(document).ready(function(){
    var display="#display";
    init(display);

    $("a").click(function(){
        let id = $(this).attr("id");
        seletePage(id,display);
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
function seletePage(id,sel){
    $(sel).children().remove();
    if(id =="a_about"){
        about(display);
    }else if(id == "a_works"){
        works(display);
    }else{
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
    //------------ＧＬＯＢＡＬ-----------------

    let center = {'text-align':'center'};
    let PAGE = $(sel);


    //------------ＳＴＲＵＣＴＵＲＥ------------
    //Ｂ１

    let B1h2,B1p;

    PAGE.append("<h2>");
    PAGE.append("<p>");
    B1h2 = PAGE.children("h2:last")
    B1p = PAGE.children("p:last");

    //Ｂ２

    let B2h2,B2div;
    let card1,card2,card3;
    let card1h2,card2h2,card3h2;
    let card1p,card2p,card3p;

    PAGE.append("<h2>");
    PAGE.append("<div>");
    B2h2 = PAGE.children("h2:last");
    B2div= PAGE.children("div:last");
    
    B2div.append("<div>");
    card1 = B2div.children("div:last");
    B2div.append("<div>");
    card2 = B2div.children("div:last");
    B2div.append("<div>");
    card3 = B2div.children("div:last");

    card1.append("<h2>");
    card1h2 = card1.children("h2:last");
    card2.append("<h2>");
    card2h2 = card2.children("h2:last");
    card3.append("<h2>");
    card3h2 = card3.children("h2:last");

    card1.append("<p>");
    card1p = card1.children("p:last");
    card2.append("<p>");
    card2p = card2.children("p:last");
    card3.append("<p>");
    card3p = card3.children("p:last");

    //Ｂ３
    let B3h2,B3div;
    let board1;

    PAGE.append("<h2>");
    B3h2 = PAGE.children("h2:last");
    PAGE.append("<div>");
    B3div = PAGE.children("div:last");

    B3div.append("<div>");
    board1 = B3div.children("div:last");
    //------------ＳＴＹＬＥＳ------------

    //Ｂ１
    let B1pStyle = {
        'white-space':'pre-line',
        'text-align':'center',
        'margin-bottom':'30px'
    };

    //Ｂ２
    let B2divStyle={
        'text-align':'center',
        'width':'auto',
        'height':'auto'
    }
    let cardStyle = {
        'display':'inline-block',
        'position':'relative',
        'margin':'10px',
        'width':'220px',
        'height':'300px',
        'text-align':'center',
        'background-color':'rgb(206, 206, 206)',
        'box-shadow':'0px 10px 10px gray'
    };
    let cardPStyle = {
        'white-space':'pre-line'
    };

    //Ｂ３
    let B3h2Style={
        'clear': 'left'
    }
    let boardStyle = {
        'display':'block',
        'position':'relative',
        "width":"100%",
        "height":"540px",
        'background-color':' rgb(206, 206, 206)'
    };


    //------------ＣＳＳ-----------------

    //Ｂ１
    B1h2.css(center);
    B1p.css(B1pStyle);
    //Ｂ２
    B2h2.css(center);
    B2div.css(B2divStyle);

    card1.css(cardStyle);
    card2.css(cardStyle);
    card3.css(cardStyle);

    card1p.css(cardPStyle);
    card2p.css(cardPStyle);
    card3p.css(cardPStyle);
    //Ｂ３
    B3h2.css(center);
    B3h2.css(B3h2Style);
    board1.css(boardStyle);


    //------------ＴＥＸＴ---------------

    //Ｂ１
    B1h2.text("About");
    B1p.text("XXXXXXXXXX\nOOOOOOOOOO");

    //Ｂ２
    B2h2.text("Skill");

    card1h2.text("Card 1");
    card2h2.text("Card 2");
    card3h2.text("Card 3");

    card1p.text("Card 1內容\n Card 1內容\n Card 1內容");
    card2p.text("Card 2內容\n Card 2內容\n Card 2內容")
    card3p.text("Card 3內容\n Card 3內容\n Card 3內容");
    
    //Ｂ３
    B3h2.text("Life");


    /**
     * 我是時源，大家都叫我十元。來自台中，畢業於國立臺中科技大學資訊工程學系。\n\
    興趣是音樂及藝術，休閒愛好爬山健身，將資訊科技領域作為畢生追求的事業。\
     */
    //------------ＡＮＩＭＡＴＩＯＮ---------------

    //Ｂ１
    B1p.hide();
    B1p.fadeIn(2000);

    //Ｂ２
    card1.hide();
    card2.hide();
    card3.hide();
    card1.fadeIn(500);
    card2.fadeIn(1000);
    card3.fadeIn(1500);

    //Ｂ３

    //------------ＥＶＥＮＴＳ---------------
    //Ｂ２
}

function works(sel){
    let PAGE = $(sel);
    PAGE.append("<h2>");
    PAGE.append("<p>");
    
    let h2 = PAGE.children("h2:last");
    let p = PAGE.children("h2:last");

    h2.text("作品");
    p.text("自己做卡片");
}