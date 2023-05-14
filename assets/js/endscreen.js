var playAgainButton = document.getElementById("playAgainButton");
var highScoreOl = document.getElementById("highScoreOl");

playAgainButton.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "./index.html";
})



var retrievedData = localStorage.getItem("scoredata");



var parsedData = JSON.parse(retrievedData);

parsedData.sort((a, b) => a.highscore + b.highscore);


for (var i = 0; i < parsedData.length; i++) {
    highScoreOl.append(document.createElement("h4"));
    highScoreOl.children[i].textContent = parsedData[i].name + " | " + parsedData[i].highscore;
}




