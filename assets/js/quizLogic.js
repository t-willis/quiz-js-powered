var quizQ = document.getElementById("quizQ");
var quizOptions = document.querySelectorAll(".options");

var question = {
    quizQuestion: "test3 is correct",
    options: ["test1", "test2", "test3", "test4"],
    correctAnswer: 2
};

function showQuestionOne(q) {
    quizQ.textContent = question.quizQuestion;
    quizOptions.forEach(function(element, index) {
        element.textContent = question.options[index];
    });
}



showQuestionOne(question);