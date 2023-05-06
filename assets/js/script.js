var startButton = document.querySelector("#startButton")
var preCountdown = document.querySelector("#countdownTimer")


var secondsLeft = 4;

// eventListener for 'start quiz' button
//     window.location.href = "./quiz.html";     save for after countdown
startButton.addEventListener("click", function() {
    document.body.children[0].children[0].setAttribute("style", "display: none");
    document.body.children[0].children[1].setAttribute("style", "display: null");

    var timerInterval = setInterval(function() {
        secondsLeft--;
        preCountdown.textContent = secondsLeft + " seconds until the quiz starts!";

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            changeToQuiz();
            preCountdown.textContent = "GO!";
        }
    }, 1000);
})

function changeToQuiz() {
    window.location.href = "./quiz.html";
}










// Old eventListener functions, no longer used
// var startSection = document.querySelector("#start")
// var quizSection = document.querySelector("#quiz")
// var endSection = document.querySelector("#end-screen")

// startSection.addEventListener("click", function() {
//     document.body.children[1].children[0].setAttribute("style", "display: none");
//     document.body.children[1].children[1].setAttribute("style", "display: null");
//     document.body.children[1].children[2].setAttribute("style", "display: none");
// })

// quizSection.addEventListener("click", function() {
//     document.body.children[1].children[0].setAttribute("style", "display: none");
//     document.body.children[1].children[1].setAttribute("style", "display: none");
//     document.body.children[1].children[2].setAttribute("style", "display: null");
// })

// endSection.addEventListener("click", function() {
//     document.body.children[1].children[0].setAttribute("style", "display: null");
//     document.body.children[1].children[1].setAttribute("style", "display: none");
//     document.body.children[1].children[2].setAttribute("style", "display: none");
// })