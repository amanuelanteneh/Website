function appBubbleFunction() {
    var clickCount = 0;
    $('#appBubble').mouseenter(function () { //fix because someone can span tf outta this and break it
            $('#appBubble').animate({ height: '55vh' }) //extend height on even clicks
    });

    $('#appBubble').mouseleave(function () { //fix because someone can span tf outta this and break it
            $('#appBubble').animate({ height: '5vh' }) //revert height to normal on odd num clicks
    });

}


$(document).ready(appBubbleFunction);

