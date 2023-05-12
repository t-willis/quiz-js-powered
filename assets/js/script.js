var startButton = document.querySelector("#startButton")
var preCountdown = document.querySelector("#countdownTimer")



var secondsLeft = 4;

// eventListener for 'start quiz' button
//     window.location.href = "./quiz.html";     save for after countdown
startButton.addEventListener("click", function() {
    changeToQuiz();
})

function changeToQuiz() {
    window.location.href = "./quiz.html";
}

playAgainButton.addEventListener("click", function() {
    playAgainOnClick();
})

function playAgainOnClick() {
    window.location.href = "./index.html";
}



