var questionNum = 0
var correct = 0
var incorrect = 0



var questions = [
    {question: "what is my name?", answers: ["bob", "bib", "boo", "beep"] , correctAnswer: "boo"},
    {question: "what is my color?", answers: ["bob", "bib", "boo", "beep"] , correctAnswer: "beep"},
    {question: "what is my shirt?", answers: ["bob", "bib", "boo", "beep"] , correctAnswer: "bib"},


]
function question(text, choice, answer){
    this.text=text;
    this.choice = choice;
    this.answer =answer
}

function loadNextQuestion (){
   $("#q").text(questions[questionNum].question)
   $("#btn0").text(questions[questionNum].answers[0])
   $("#btn1").text(questions[questionNum].answers[1])
   $("#btn2").text(questions[questionNum].answers[2])
   $("#btn3").text(questions[questionNum].answers[3])

}

$("#startButton").on("click", function(){
    $("#startDiv").addClass("removed")
    $("#quizDiv").removeClass("removed")
    loadNextQuestion()
})

$(document).on("click", ".choice", function(){
    alert("hi");
})


