$(document).ready(function(){
  $(".again").hide();
  $(".questionContainer").hide();
  $(".next").hide();
  $(".scoreDisplay").hide();
});


$(".startGame").click(function() {
  $(".questionContainer").show();
  $(".next").show();
  $(".scoreDisplay").show();
});


var totalNumQuestions = $('.question').size();


var currentQuestion = 0;


$question = $('.question');


$question.hide();


$($question.get(currentQuestion)).fadeIn();


$('.next').click(function() {


  $($question.get(currentQuestion)).fadeOut(function() {


    currentQuestion = currentQuestion + 1;


    $($question.get(currentQuestion)).fadeIn();

  });

});


function setScore() {
  var score = $('input:checked[value=correct]').length
  $('#score').text(score);
}


$('input').change(setScore);


setScore();
