// variables to be used below
var startButton = document.querySelector("#startButton")
var preCountdown = document.querySelector("#countdownTimer")


// eventListener for 'start quiz' button
startButton.addEventListener("click", function() {
    changeToQuiz();
})

// function for 'start quiz' button
function changeToQuiz() {
    window.location.href = "./quiz.html";
}

// eventListener for 'play again' button
playAgainButton.addEventListener("click", function() {
    playAgainOnClick();
})

// function for 'play again' button
function playAgainOnClick() {
    window.location.href = "./index.html";
}
