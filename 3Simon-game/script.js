colorList = ['red', 'green', 'blue', 'yellow'];
gamePattern = [];
userSequence = [];
gameStatus = false;

function nextSequence() {
    var chosenColor = colorList[Math.floor(Math.random() * 4)];
    gamePattern.push(chosenColor);
    $('#' + chosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(chosenColor);

    $('h1').text('Level ' + gamePattern.length);
}

function playSound(name) {
    var sound = new Audio('sounds/'+ name +'.mp3');
    sound.play();
}

function checkAnswer() {
    if (gamePattern[userSequence.length-1] == userSequence[userSequence.length - 1]) {
        if (gamePattern.length == userSequence.length) {
            setTimeout(function(){nextSequence();}, 1000);
            userSequence = [];
        }

    }
    else {
        $('body').css('background-color', 'red');
        setTimeout(function(){$('body').css('background-color', '#011F3F')})
        $('h1').text('GAME OVER BITCH, PRESS ANY KEY TO TRY AGAIN');
        playSound('wrong');
        gameStatus = false;
        gamePattern = [];
        userSequence = [];
    }
}

function handleClick(color) {
    $('#' + color).addClass('pressed');
    setTimeout(function(){ $('#' + color).removeClass('pressed');}, 100);
    userSequence.push(color);

    playSound(color);
}

$('.btn').click(function(event){
    if (gameStatus == true) {
        handleClick(event.currentTarget.id);
        checkAnswer(userSequence.length);
    }
    
});

$(document).keydown(function(){
    nextSequence();
    if (gameStatus == false) {
        gameStatus = true;
    }
});