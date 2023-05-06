var quizQ = document.getElementById("quizQ");
var quizOptions = document.querySelectorAll(".options");

var question1 = {
    quizQuestion: "test3 is correct",
    options: ["test1", "test2", "test3", "test4"],
    correctAnswer: 2,
};
var question2 = {
    quizQuestion: "test1 is correct",
    options: ["test1", "test2", "test3", "test4"],
    correctAnswer: 0,
};



var score = 0;

function showQuestionOne() {
    quizQ.textContent = question1.quizQuestion;
    quizOptions.forEach(function(element, index) {
        element.textContent = question1.options[index];
        element.addEventListener("click", function() {
            if (question1.correctAnswer == index) {
                score++;
                console.log("correct answer");
                console.log(score);
            } else {
                score--;
                console.log("incorrect answer");
                console.log(score);
            }
        })
    });
}

showQuestionOne(question1);