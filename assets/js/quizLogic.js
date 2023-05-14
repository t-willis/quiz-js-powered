// variables to be used below
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
        quizQuestion: "What is the most common time signature used in modern music?",
        options: ["4/4", "3/4", "9/3", "17/9"],
        correctAnswer: 0,
    },
    {
        quizQuestion: "What band is credited with pioneering the genre of music known as 'Djent'?",
        options: ["Periphery", "Meshuggah", "ERRA", "TesseracT"],
        correctAnswer: 1,
    },
    {
        quizQuestion: "Which musical scale includes 12 notes per octave?",
        options: ["Chromatic", "Pentatonic", "Hexatonic", "Tetratonic"],
        correctAnswer: 0,
    },
    {
        quizQuestion: "Which of these songs is NOT a song from the band Alestorm?",
        options: ["Drink", "That Famous Ol' Spiced", "Gangplank", "Wenches & Mead"],
        correctAnswer: 2,
    },
    {
        quizQuestion: "Which musical interval is known as the 'Devils Interval'?",
        options: ["Minor sixth", "Semitone", "Whole tone", "Tritone"],
        correctAnswer: 3,
    },
    {
        quizQuestion: "Technical death metal band Necrophagist released how many albums before disbanding?",
        options: ["One", "Two", "Three", "Four"],
        correctAnswer: 1,
    },
    {
        quizQuestion: "The term BPM stands for which of the following?",
        options: ["Beeps per minute", "Bits per minute", "Bars per minute", "Beats per minute"],
        correctAnswer: 3,
    },
    {
        quizQuestion: "Which year did the progressive metal band Dream Theater win a grammy for their song 'The Alien'?",
        options: ["2012", "2014", "2019", "2022"],
        correctAnswer: 3,
    }
]


// score and iter set to 0 to be changed by other functions
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


// function to pull questions from questionList depending on value of iter variable
function getCurrentQuestion() {
    var ret = questionList[iter];
    console.log(ret);
    return ret;
}


// function to hide question content and show enter name form
function changeToEndScreen() {
    quizQ.setAttribute("style", "display: none");
    answerOptions.setAttribute("style", "display: none");
    answerFeedback.setAttribute("style", "display: none");
    enterName.setAttribute("style", "display: null");
    timeCounter.textContent = "Great job!";
}


// function to be utilized by eventListener on correct click
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


// function to be utilized by eventListener on incorrect click
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
        timeLeft = (timeLeft - 5);
    } else {
        changeToEndScreen();
        timeCounter.setAttribute("style", "display: none");
    }
}


// timer function to countdown remainint time and update score
scoreCounter.textContent = "Score: " + score;
var timeLeft = 60;
function countdown() {

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


// eventListener to create new highScores array if it doesn't already exist
// then saves object to localStorage
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


// initial running of quizLogic to begin everything
quizLogic();
