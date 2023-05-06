var startButton = document.querySelector("#startButton")

// eventListener for 'start quiz' button
startButton.addEventListener("click", function() {
    window.location.href = './quiz.html';
})













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