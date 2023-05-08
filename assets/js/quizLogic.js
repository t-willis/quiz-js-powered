//queryselectors to replace div and li with text from object
var quizQ = document.getElementById("quizQ");
var quizOptions = document.querySelectorAll(".options");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");



var question1 = ["answer is testa1", "testa1", "testa2", "testa3", "testa4", 1];
var question2 = ["answer is testa2", "testa1", "testa2", "testa3", "testa4", 2];
var question3 = ["answer is testa3", "testa1", "testa2", "testa3", "testa4", 3];
var question4 = ["answer is testa4", "testa1", "testa2", "testa3", "testa4", 4];
var question5 = ["answer is testa1", "testa1", "testa2", "testa3", "testa4", 1];


var questionIndex = 1;

function insertQuestion(questionNumber) {
    quizQ.textContent = questionNumber[0];
    opt1.textContent = questionNumber[1];
    opt2.textContent = questionNumber[2];
    opt3.textContent = questionNumber[3];
    opt4.textContent = questionNumber[4];
    chooseAnswer();
}
insertQuestion(question1);

function chooseAnswer() {
    opt1.addEventListener ("click", function() {
        if (1 ==  question1[5]) {
            console.log("correct");
        } else {
            console.log("incorrect");
        }
    })
    opt2.addEventListener ("click", function() {
        if (2 ==  question1[5]) {
            console.log("correct");
        } else {
            console.log("incorrect");
        }
    })
    opt3.addEventListener ("click", function() {
        if (3 ==  question1[5]) {
            console.log("correct");
        } else {
            console.log("incorrect");
        }
    })
    opt4.addEventListener ("click", function() {
        if (4 ==  question1[5]) {
            console.log("correct");
        } else {
            console.log("incorrect");
        }
    })
}










// list of questions to be utilized by quizLogic()
// var questionList = [
//     {
//         quizQuestion: "test1 is correct",
//         options: ["test1", "test2", "test3", "test4"],
//         correctAnswer: 0,
//     },
//     {
//         quizQuestion: "test2 is correct",
//         options: ["test1", "test2", "test3", "test4"],
//         correctAnswer: 1,
//     },
//     {
//         quizQuestion: "test3 is correct",
//         options: ["test1", "test2", "test3", "test4"],
//         correctAnswer: 2,
//     },
//     {
//         quizQuestion: "test4 is correct",
//         options: ["test1", "test2", "test3", "test4"],
//         correctAnswer: 3,
//     },
//     {
//         quizQuestion: "test1 is correct",
//         options: ["test1", "test2", "test3", "test4"],
//         correctAnswer: 0,
//     }
// ]

// // baseline score set to 0
// var score = 0;
// var questionIndex = 0;


// function insertQuestion (questionIndex) {
//     quizQ.textContent = questionList[questionIndex].quizQuestion;
//     quizOptions.forEach(function(element, index) {
//         element.textContent = questionList[questionIndex].options[index];
//     });
// }
// insertQuestion(questionIndex);
// function checkIndAns() {
//     if (element.textContent == questionList[questionIndex].correctAnswer) {
//         console.log("correct")
//     } else {
//         console.log("incorrect");
//     }
// }


// function checkAnswer() {
//     opt1.addEventListener ("click", checkIndAns());
// }




// function quizLogic(x) {
//     quizQ.textContent = x.quizQuestion;
//     quizOptions.forEach(function(element, index) {
//         element.textContent = x.options[index];
//     })
// }
// quizLogic(questionList[0]);


// actual quiz logic function
// function quizLogic(x) {
//     quizQ.textContent = x.quizQuestion;
//     quizOptions.forEach(function(element, index) {
//         element.textContent = x.options[index];
//         element.removeEventListener("click", clickEvent());
//         element.addEventListener("click", clickEvent());
//     });
// }

// quizLogic(questionList[0]);

// function clickevent() {
//     if (x.correctAnswer == index) {
//         score++;
//         questionIndex++;
//         console.log("correct answer!" + " | score: " + score + " | question number: " + questionIndex);
//         console.log("question index is: " + questionIndex);
//         quizLogic(questionList[questionIndex]);
//     } else {
//         score--;
//         console.log("incorrect answer!" + " | score: " + score + " | question number: " + questionIndex);
//         console.log("question index is: " + questionIndex);
//     }
// }