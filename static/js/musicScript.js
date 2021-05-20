
var albumPics = ["/static/img/the1975.png","/static/img/loveitwhenu.png","/static/img/2ndlaw.png",
                 "/static/img/noteson.png","/static/img/swim.png",
                 "/static/img/dreamland.png","/static/img/luvisrage2.png", "/static/img/manonmooniii.png",
                 "/static/img/sr3mm.png", "/static/img/cultureii.png",
                 "/static/img/blond.png","/static/img/iloveyou.png","/static/img/hellboy.png", 
                 "/static/img/10000days.png", "/static/img/absolve.png", "/static/img/wipeout.png",
                  "/static/img/zaba.png", "/static/img/lat.png"];
var albumPicElements = document.getElementsByClassName("album-pic");


$(document).ready(function() {
    for (let i=0; i < albumPics.length; i++) {
        albumPicElements[i].style.backgroundImage = 'url("' + albumPics[i] + '")';       
    }

  });