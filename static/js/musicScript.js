
var albumPics = ["/static/img/the1975.png","/static/img/loveitwhenu.png","/static/img/2ndlaw.png",
                 "/static/img/noteson.png","/static/img/swim.png",
                 "/static/img/dreamland.png","/static/img/luvisrage2.png", "/static/img/manonmooniii.png",
                 "/static/img/sr3mm.png", "/static/img/cultureii.png",
                 "/static/img/blond.png","/static/img/iloveyou.png","/static/img/hellboy.png", 
                 "/static/img/10000days.png", "/static/img/absolve.png", "/static/img/wipeout.png",
                 "/static/img/zaba.png", "/static/img/lat.png", "/static/img/resist.png",
                 "/static/img/cali.png","/static/img/brief.png","/static/img/crybaby.png",
                 "/static/img/revelations.png","/static/img/atake.png", "https://images.genius.com/7ccf653b4938db1f282adad9906fe0a9.1000x1000x1.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/81Bbs8DYIHL._AC_SX522_.jpg", "https://i.scdn.co/image/ab67616d0000b27382fed5cf43d9b874184c6e00",
                "/static/img/origin.png", "https://images.genius.com/439279ef55cbef2bad0530aecda4f9d8.1000x1000x1.png", "https://m.media-amazon.com/images/I/A1AHAMAExuL._SS500_.jpg",
                "https://images.genius.com/c8a0dba90778be71f3da065544473e13.1000x1000x1.jpg","https://images.genius.com/5dedb47d3cd04901ffe7be87ecf9e10a.600x600x1.jpg",
                "https://images.genius.com/d7d5d63b708a1b83daf2df4a1b6bdcd9.1000x1000x1.jpg", "https://images.genius.com/de6e7ab3dc06c13eed2f853493b1406e.1000x1000x1.jpg",
                "https://images.genius.com/5aa2f592807966cc17cd3a712d3e2784.1000x1000x1.png", "https://images.genius.com/cb21b9bd8998b4265c6cbcae597688d1.1000x1000x1.jpg"];
var albumPicElements = document.getElementsByClassName("album-pic");


$(document).ready(function() {
    for (let i=0; i < albumPics.length; i++) {
        albumPicElements[i].style.backgroundImage = 'url("' + albumPics[i] + '")';       
    }

  });