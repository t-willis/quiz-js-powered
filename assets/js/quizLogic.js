// queryselectors to replace div and li with text from object
var quizQ = document.getElementById("quizQ");
var quizOptions = document.querySelectorAll("#answerOptions li");


// list of questions to be utilized by quizLogic()
var questionList = [
    {
        quizQuestion: "who dat boi?",
        options: ["it spub", "test2", "test3", "test4"],
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
        quizQuestion: "test5 is correct",
        options: ["test5", "test2", "test3", "test4"],
        correctAnswer: 0,
    }
]

var score = 0;
var iter = 0;

// actual quiz logic function
function quizLogic() {
    var currentQuestion = getCurrentQuestion();
    quizQ.textContent = currentQuestion.quizQuestion;
    quizOptions.forEach(function(element, index) {
        element.textContent = currentQuestion.options[index];
        element.removeEventListener("click", correctClick);
        element.removeEventListener("click", incorrectClick);
        if (index == currentQuestion.correctAnswer) {
            element.addEventListener("click", correctClick);
        } else {
            element.addEventListener("click", incorrectClick);
        }
    });
}

function getCurrentQuestion() {
    var ret = questionList[iter];
    console.log(ret);
    return ret;
}

function changeToEndScreen() {
    window.location.href = "./end-screen.html";
}

function correctClick() {
    iter++;
    score++;
    console.log("correct test");
    console.log("score: " + score);
    if (iter < questionList.length) {
        quizLogic();
    } else {
        changeToEndScreen();
    }
}

function incorrectClick() {
    score--;
    console.log("incorrect test");
    console.log("score: " + score);
}

quizLogic();
