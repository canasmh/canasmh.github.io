var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var firstPress = true;
var level = 0;

$(document).keydown(function () {
  if (firstPress) {
    $('#level-title').text("Level " + level);
    nextSequence();
    firstPress=false;
  }
});

$(".btn").click(function () {
  var userChosenColor = $(this).attr('id');
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length - 1);
});


function checkAnswer(currentLevel) {

  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    if ((userClickedPattern.length) === level) {
      userClickedPattern = [];
      setTimeout(nextSequence, 1000);
    }
  }

  else {
    gameOver()
    firstPress=true;
    level=0;
    gamePattern = [];
    userClickedPattern = [];
  }

}


function nextSequence() {

  $('#level-title').text("Level " + level);
  level++;
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
  gamePattern.push(randomChosenColor);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $('#' + currentColor).addClass('pressed')
  setTimeout(function () {
    $('#' + currentColor).removeClass('pressed')
  }, 100);
}

function gameOver() {
  $('#level-title').text("Game over. Press any key to start over.");
  $('body').addClass("game-over");
  setTimeout(function () {
    $('body').removeClass("game-over");
  }, 200);
  var audio = new Audio("sounds/wrong.mp3");
  audio.play();
}
