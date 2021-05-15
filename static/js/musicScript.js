
var albumPics = ["/static/img/the1975.png","/static/img/muse.png",
                 "/static/img/peep.png","/static/img/mac.png",
                 "/static/img/glass.png","/static/img/tool.png",
                 "/static/img/uzi.png", "/static/img/cudi.png",
                 "/static/img/swae.png"];
var albumPicElements = document.getElementsByClassName("album-pic");


$(document).ready(function() {
    for (let i=0; i < albumPics.length; i++) {
        albumPicElements[i].style.backgroundImage = 'url("' + albumPics[i] + '")';       
    }

  });