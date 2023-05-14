// queryselectors to replace div and li with text from object
var quizQ = document.getElementById("quizQ");
var quizOptions = document.querySelectorAll("#answerOptions li");
var leaderboard = document.getElementById("leaderboard");
var enterName = document.getElementById("enterName");
var answerOptions = document.getElementById("answerOptions");
var scoreCounter = document.getElementById("scoreCounter");
var timeCounter = document.getElementById("timeCounter");

var answerFeedback = document.getElementById("answerFeedback");
var submit = document.getElementById("submit");
var highScores;



// list of questions to be utilized by quizLogic()
var questionList = [
    {
        quizQuestion: "What language is the logic for this quiz written in?",
        options: ["JavaScript", "HTML", "Python", "jQuery"],
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
    quizQ.setAttribute("style", "display: none");
    answerOptions.setAttribute("style", "display: none");
    answerFeedback.setAttribute("style", "display: none");
    enterName.setAttribute("style", "display: null");
    timeCounter.textContent = "Great job!";
}


function correctClick() {
    iter++;
    (score = score + 5);
    console.log("correct test");
    console.log("score: " + score);
    scoreCounter.textContent = "Score: " + score;
    answerFeedback.textContent = "You got that one correct! Now try this one!";
    answerFeedback.setAttribute("style", "color: green");
    if (iter < questionList.length) {
        quizLogic();
    } else {
        changeToEndScreen();
        timeCounter.setAttribute("style", "display: none");
    }
}

function incorrectClick() {
    iter++;
    (score = score - 4);
    console.log("incorrect test");
    console.log("score: " + score);
    scoreCounter.textContent = "Score: " + score;
    answerFeedback.textContent = "Incorrect...Now try this one!";
    answerFeedback.setAttribute("style", "color: red");
        if (iter < questionList.length) {
        quizLogic();
    } else {
        changeToEndScreen();
    }
}


scoreCounter.textContent = "Score: " + score;

function countdown() {
    var timeLeft = 30;

    var timeInterval = setInterval(function () {
        timeLeft--;
        if (timeLeft !== 0) {
          timeCounter.textContent = "Time left: " + timeLeft + "s";
        }
    
        if(timeLeft === 0) {
          clearInterval(timeInterval);
          timeCounter.textContent = "Time is up!";
          changeToEndScreen();
        }
    
    
      }, 1000);
    }
countdown();





submit.addEventListener("click", function(event) {
    event.preventDefault();
    var fname = document.getElementById("fname").value;
    if (!localStorage.getItem("scoredata")) {
        highScores = [];
        highScores.push({name: fname, highscore: score});
        localStorage.setItem("scoredata", JSON.stringify(highScores));
    } else {
        var highScores = JSON.parse(localStorage.getItem("scoredata"));
        highScores.push({name: fname, highscore: score});
        localStorage.setItem("scoredata", JSON.stringify(highScores));
    
} window.location.href = "./end-screen.html";
})




quizLogic();

