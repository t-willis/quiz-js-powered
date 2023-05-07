var quizQ = document.getElementById("quizQ");
var quizOptions = document.querySelectorAll(".options");

var question1 = [
    {
        quizQuestion: "test1 is correct",
        options: ["test1", "test2", "test3", "test4"],
        correctAnswer: 0,
    },
    {
        quizQuestion: "test2 is correct",
        options: ["test1", "test2", "test3", "test4"],
        correctAnswer: 1,
    },
    {
        quizQuestion: "test3 is correct",
        options: ["test1", "test2", "test3", "test4"],
        correctAnswer: 2,
    },
    {
        quizQuestion: "test4 is correct",
        options: ["test1", "test2", "test3", "test4"],
        correctAnswer: 3,
    },
    {
        quizQuestion: "test1 is correct",
        options: ["test1", "test2", "test3", "test4"],
        correctAnswer: 0,
    }
]







var score = 0;

function showQuestionOne(questionx) {
    quizQ.textContent = questionx.quizQuestion;
    quizOptions.forEach(function(element, index) {
        element.textContent = questionx.options[index];
        element.addEventListener("click", function() {
            if (questionx.correctAnswer == index) {
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

showQuestionOne(question1[3]);
