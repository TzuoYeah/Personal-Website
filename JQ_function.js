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
    }else if(location.hash=="#skill"){
        skill(sel);
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
    }else if(id == "a_skill"){
        skill(display);
    }else{
        home(display);
    }
}
function home(sel){
    //------------ＧＬＯＢＡＬ-----------------
    let PICTURE_NAME = "180x180-2.png";
    let PAGE = $(sel);


    //------------ＳＴＲＵＣＴＵＲＥ------------
    let zone,home_img,home_h2,home_p;
    PAGE.append("<div>");
    zone = PAGE.children('div:last');
    zone.append("<img>");
    home_img = zone.children('img:last');
    zone.append("<h2>");
    home_h2 = zone.children('h2:last');
    zone.append("<p>");
    home_p = zone.children('p:last');


    //------------ＳＴＹＬＥＳ-----------------
    let center = {
        'text-align':'center'
    }
    let home_imgStyle = {
       'margin-top':'calc(50vh - 210px)',
       'border-radius':'90px'
    }
    let zoneStyle={
        'display':'block',
        'text-align':'center',
        'width':'100%',
        'height':'calc(100vh - 120px)'
    }

    //------------ＣＳＳ-----------------
    zone.css(zoneStyle);
    home_img.css(home_imgStyle);
    home_h2.css(center);
    home_p.css(center);

    //------------ＴＥＸＴ---------------------
    $("img").attr({src:PICTURE_NAME});
    $("h2").text("姓名");
    $("p").text("“一句話 ”");
}

function about(sel){
    //------------ＧＬＯＢＡＬ-----------------
    let center = {'text-align':'center'};
    let PAGE = $(sel);

    //------------ＳＴＲＵＣＴＵＲＥ------------
    let B3h2,B3div;
    let board1,board2,board3;
    let board1p,board2p,board3p;

    PAGE.append("<h2>");
    B3h2 = PAGE.children("h2:last");
    PAGE.append("<div>");
    B3div = PAGE.children("div:last");

    B3div.append("<div>");
    board1 = B3div.children("div:last");
    B3div.append("<div>");
    board2 = B3div.children("div:last");
    B3div.append("<div>");
    board3 = B3div.children("div:last");

    board1.append("<p>");
    board1p = board1.children("p:last");
    board2.append("<p>");
    board2p = board2.children("p:last");
    board3.append("<p>");
    board3p = board3.children("p:last");
    //------------ＳＴＹＬＥＳ------------
    let B3h2Style={
    }
    let B3divStyle={
        'overflow': 'hideen',
        //'white-space': 'nowrap',
        "height":"calc(100vh - 167px)",
        'background-color':'#bbb',
        
    }
    let boardStyle = {
        'display':'inline-block',
        'position':'relative',
        "width":"100%",
        "height":"100%",
        'background-color':'rgba(255,255,255,0.5)'
    };

    let board_pStyle = {
        'margin':'0px'
    };

    //------------ＣＳＳ-----------------
    B3h2.css(center);
    B3h2.css(B3h2Style);
    B3div.css(B3divStyle);

    board1.css(boardStyle);
    board2.css(boardStyle);
    board3.css(boardStyle);

    board1p.css(board_pStyle);
    board2p.css(board_pStyle);
    board3p.css(board_pStyle);
    //------------ＴＥＸＴ---------------
    B3h2.text("Life");
    board1p.text("簡介 - 從小到大巴拉巴拉");
    board2p.text("愛好 - 音樂爬山巴拉巴拉");
    board3p.text("專業 - 軟體硬體WebDevOps雲端巴拉巴拉");

    //------------ＡＮＩＭＡＴＩＯＮ---------------
    board2.hide();
    board3.hide();

    //------------ ＥＶＥＮＴＳ---------------
    var b3=0;

    B3div.on("click",function(){
        b3>=2 ? b3=0 : b3++;
        switch(b3){
            case 0:
                board3.hide();
                board1.fadeIn(500);
                break;
            case 1:
                board1.hide();
                board2.fadeIn(500);
                break;
            case 2:
                board2.hide();
                board3.fadeIn(500);
                break;
        }
    });
}

function skill(sel){
    //------------ＧＬＯＢＡＬ-----------------
    let center = {'text-align':'center'};
    let PAGE = $(sel);

    //------------ＳＴＲＵＣＴＵＲＥ------------
    //Ｂ１

    let B1h2,B1div,B1p;

    PAGE.append("<h2>");
    B1h2 = PAGE.children("h2:last")
    PAGE.append("<div>");
    B1div = PAGE.children("div:last")
    B1div.append("<p>");
    B1p = B1div.children("p:last");

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
    //------------ＳＴＹＬＥＳ------------
    //Ｂ１
    let B1pStyle = {
        'white-space':'pre-line',
        'text-align':'center',
        'margin':'0',
    };
    let B1divStyle={
        'margin':'0 auto',
        'padding':'10px',
        'height':'40px',
        'width':'50vw',
        'background-color':'rgba(255,255,255,0.5)',
    }
    //Ｂ２
    let B2divStyle={
        'text-align':'center',
        'width':'auto',
        "height":"auto",
        "min-height":"calc(100vh - 294px)"
    }
    let cardStyle = {
        'display':'inline-block',
        'position':'relative',
        'top':'0px',
        'margin':'10px',
        'width':'220px',
        'height':'300px',
        'background-color':'rgba(255,255,255,0.5)',
        'box-shadow':'0px 10px 10px rgba(0,0,0,0.5)',
        'transition': 'width 0.5s,height 0.5s,top 0.5s'
    };
    let cardh2Style={
        'margin':'10px auto',
        'padding-bottom':'3px',
        'width':'165px',
        'border-bottom':'1px solid grey'
    };
    let cardPStyle = {
        'width':'140px',
        'margin':'0px auto',
        'line-height':'40px',
        'text-align':'left',
        'font-size': '20px',
        'white-space':'pre-line',
        'font-family':'sans-serif'
    };
    //------------ＣＳＳ-----------------

    //Ｂ１
    B1h2.css(center);
    B1div.css(B1divStyle);
    B1p.css(B1pStyle);

    //Ｂ２
    B2h2.css(center);
    B2div.css(B2divStyle);

    card1.css(cardStyle);
    card2.css(cardStyle);
    card3.css(cardStyle);

    card1h2.css(cardh2Style);
    card2h2.css(cardh2Style);
    card3h2.css(cardh2Style);
    
    card1p.css(cardPStyle);
    card2p.css(cardPStyle);
    card3p.css(cardPStyle);
    //------------ＴＥＸＴ---------------

    //Ｂ１
    B1h2.text("Summary");
    B1p.text("點擊卡片可看更多內容, \n 這裡是第二行得斯.");

    //Ｂ２
    B2h2.text("Skill");

    card1h2.text("Language");
    card2h2.text("Database");
    card3h2.text("Tool");

    card1p.text("☑ C# \n ☑ python\n ☑ javascript \n ☐ \n ☐ ");
    card2p.text("☑ Ms SQL \n ☑ SQLite \n ☐ \n ☐ \n ☐")
    card3p.text("☑ Git \n ☑ VS code \n ☑ Linux \n ☐ \n ☐");

    //------------ＡＮＩＭＡＴＩＯＮ---------------

    //Ｂ１
    B1p.hide();
    B1p.fadeIn(500);

    //Ｂ２
    card1.hide();
    card2.hide();
    card3.hide();
    card1.fadeIn(300);
    card2.fadeIn(600);
    card3.fadeIn(900);
    //------------ ＥＶＥＮＴＳ---------------
    //Ｂ２
    let cardView={
        'top':'-10px',
        'width':'244px',
        'height':'330px'
    };

    card1.hover(function(){$(this).css(cardView);}  ,function(){$(this).css(cardStyle);});
    card2.hover(function(){$(this).css(cardView);}  ,function(){$(this).css(cardStyle);});
    card3.hover(function(){$(this).css(cardView);}  ,function(){$(this).css(cardStyle);});

}
function works(sel){
    //------------ＧＬＯＢＡＬ-----------------
    let PAGE = $(sel);
    

    //------------ＳＴＲＵＣＴＵＲＥ------------
    let zone,works_h2,works_p
    PAGE.append("<div>");
    zone = PAGE.children('div:last');
    zone.append("<h2>");
    works_h2 = zone.children("h2:last");
    zone.append("<p>");
    works_p = zone.children("p:last");


    //------------ＳＴＹＬＥＳ-----------------
    let zoneStyle={
        'display':'block',
        'text-align':'center',
        'width':'100%',
        'height':'calc(100vh - 120px)'
    }
    
    //------------ＣＳＳ-----------------
    zone.css(zoneStyle);
    

    //------------ＴＥＸＴ---------------------
    works_h2.text("作品");
    works_p.text("卡片");
}
