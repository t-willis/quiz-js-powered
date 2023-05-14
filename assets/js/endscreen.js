var playAgainButton = document.getElementById("playAgainButton");
var highScoreOl = document.getElementById("highScoreOl");
var clearHighScores = document.getElementById("clearHighScores");
var scoresCleared = document.getElementById("scoresCleared");



playAgainButton.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "./index.html";
})

clearHighScores.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.clear();
    location.reload();
})


var retrievedData = localStorage.getItem("scoredata");

var parsedData = JSON.parse(retrievedData);

var sortedData = parsedData.sort((a, b) => a.highscore - b.highscore);
var reversedData = sortedData.reverse();

for (var i = 0; i < reversedData.length; i++) {
    highScoreOl.append(document.createElement("h4"));
    highScoreOl.children[i].textContent = reversedData[i].name + " | " + reversedData[i].highscore;
}
