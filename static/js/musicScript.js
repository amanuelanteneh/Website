
var albumPics = ["https://images.genius.com/dc2572caf975df705384d4cb73fcd632.1000x1000x1.jpg","https://images.genius.com/75e00924380679580e1eec2518036101.1000x1000x1.jpg","http://images.genius.com/e00c2cd9627558026a8fe51f598f0604.1000x1000x1.jpg",
                 "https://images.genius.com/8d91d36eb040a913eb3453d6ced6d7a7.1000x1000x1.png","https://images.genius.com/3a5a5525277ce891f722c3221ade68d2.1000x1000x1.jpg",
                 "https://images.genius.com/9306320de2f10fe382bd7e5124729ea4.1000x1000x1.jpg","https://images.genius.com/50af11dfe454a4aa20544f19b2dd0791.1000x1000x1.png", "https://images.genius.com/07a3deb92bfe7c78f95add89edc0e5ed.1000x1000x1.png",
                 "https://images.genius.com/fc0c515863783c3d93bf586ec5d876ee.1000x1000x1.png", "https://images.genius.com/9274faa75f983fe018c3abe76dc7819e.1000x1000x1.png",
                 "https://images.genius.com/626ddf4c88de200d9487bb42449d1ae3.1000x1000x1.png","https://images.genius.com/384e89225e662195b83ade8b9165a381.660x660x1.jpg","https://images.genius.com/63a06f2f098a64032681957547cac0b6.1000x1000x1.png", 
                 "https://images.genius.com/6160bc8901e38d0c1aee742044a5e20e.999x999x1.jpg", "https://images.genius.com/1cb37f019090222d0b989faca033f49e.1000x1000x1.jpg", "https://images.genius.com/858fc19cb2091093364895e43ccb1264.1000x1000x1.jpg",
                 "https://images.genius.com/3ad5e78bd87feed599264afccafdccb4.400x400x1.jpg", "https://images.genius.com/ecd024e2e467640e627181cf02e3046a.1000x1000x1.png", "https://images.genius.com/99c90444f6db47f6abd1ec2e44502da5.1000x1000x1.jpg",
                 "https://images.genius.com/a4d06f74fc0569782b269dc7c49a30c4.500x500x1.jpg","https://images.genius.com/40bcd5cc419a7f4d283c62b7e181e156.1000x1000x1.png","https://images.genius.com/860e9c76e313457dad72c3427fdcc782.1000x1000x1.png",
                 "https://images.genius.com/1f77c23ba856976ec0935f5c31a5e6e6.1000x1000x1.jpg","https://images.genius.com/73e5eb9c6c73146ec57f8634bb905e01.1000x1000x1.jpg", "https://images.genius.com/7ccf653b4938db1f282adad9906fe0a9.1000x1000x1.jpg",
                "http://images.genius.com/a8de6b36ccc06b0e9096884115bfea8c.1000x1000x1.jpg", "https://images.genius.com/e2fc32b6853816ef2b9d060cc0df8d58.1000x1000x1.png",
                "https://images.genius.com/06cc39e9166099cb526ad783affa4d59.1000x1000x1.jpg", "https://images.genius.com/439279ef55cbef2bad0530aecda4f9d8.1000x1000x1.png", "https://images.genius.com/e0bb46cd54cccee720547407cf67086a.995x1000x1.jpg",
                "https://images.genius.com/c8a0dba90778be71f3da065544473e13.1000x1000x1.jpg","https://images.genius.com/5dedb47d3cd04901ffe7be87ecf9e10a.600x600x1.jpg",
                "https://images.genius.com/d7d5d63b708a1b83daf2df4a1b6bdcd9.1000x1000x1.jpg", "https://images.genius.com/de6e7ab3dc06c13eed2f853493b1406e.1000x1000x1.jpg",
                "https://images.genius.com/5aa2f592807966cc17cd3a712d3e2784.1000x1000x1.png", "https://images.genius.com/cb21b9bd8998b4265c6cbcae597688d1.1000x1000x1.jpg"];
var albumPicElements = document.getElementsByClassName("album-pic");


$(document).ready(function() {
    for (let i=0; i < albumPics.length; i++) {
        albumPicElements[i].style.backgroundImage = 'url("' + albumPics[i] + '")';       
    }

  });