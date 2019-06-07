var questionNum = 0
var correct = 0
var incorrect = 0
var count = 5;
var timer;





var questions = [
    {question: "what is my name?", answers: ["bob", "bib", "boo", "tiffany"] , correctAnswer: "tiffany"},
    {question: "what is my color?", answers: ["bob", "bib", "boo", "beep"] , correctAnswer: "beep"},
    {question: "what is my shirt?", answers: ["bob", "bib", "boo", "beep"] , correctAnswer: "bib"},
    {question: "what is my t?", answers: ["bob", "bib", "boo", "beep"] , correctAnswer: "bib"},
    {question: "what is my p?", answers: ["bob", "bib", "boo", "beep"] , correctAnswer: "bib"},
    {question: "what is my s?", answers: ["bob", "bib", "boo", "beep"] , correctAnswer: "bib"},
    {question: "what is my q?", answers: ["bob", "bib", "boo", "beep"] , correctAnswer: "bib"},
    {question: "what is my e?", answers: ["bob", "bib", "boo", "beep"] , correctAnswer: "bib"},
    {question: "what is my 5", answers: ["bob", "bib", "boo", "beep"] , correctAnswer: "bib"},
    {question: "what is my 0?", answers: ["bob", "bib", "boo", "beep"] , correctAnswer: "bib"},
    
]

function countStartNumber (){
    
    count--;
    $("#timer").text(count)
    if (count===0){
        incorrect++;

        questionNum++;
        loadNextQuestion();
    }

    //conditional says if your out of time, then load next question 
    //Also increment the wrong answers

}


function loadNextQuestion (){
    count = 5
    $("#timer").text(count)
    clearInterval(timer)
     timer = setInterval(countStartNumber,1000);
   $("#q").text(questions[questionNum].question)
   $("#btn0").text(questions[questionNum].answers[0])
   $("#btn1").text(questions[questionNum].answers[1])
   $("#btn2").text(questions[questionNum].answers[2])
   $("#btn3").text(questions[questionNum].answers[3])
   
   $("#scoreDiv").text("correct: "+ correct +" incorrect: " + incorrect)
   $("#qnum").text(questionNum + 1)

}

$("#startButton").on("click", function(){
    $("#startDiv").addClass("removed")
    $("#quizDiv").removeClass("removed")
    loadNextQuestion()
})

$(document).on("click", ".buttons", function(){
 var input = $(this).text()
 

    if (questionNum > 9){

        endGame();
    } else {
        console.log(input);
        console.log(questions[questionNum].correctAnswer)
   if (input === questions[questionNum].correctAnswer)
   {
       correct++
       loadNextQuestion ();
   } else {

    incorrect++
    loadNextQuestion ();
   }
   console.log(correct)
   console.log(incorrect)
    }

   function endGame(){
       $("#quizDiv").empty()
       var scoreText = $("<p>").text("correct: "+ correct +" incorrect: " + incorrect)
       $("#quizDiv").append(scoreText)
       $("#scoreDiv").empty()
       $("#quizDiv").addClass(".removed")
   }
   questionNum++;
});


