function printHS () {
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    highscores.sort(function(a, b) {
        return b.score - a.score;
    });

    highscores.forEach(function(score) {
        var liTag = document.createElement("li");
        liTag.textContent = score.input + " - " + score.score;

        var olEl = document.getElementById("highscores");
        olEl.appendChild(liTag);
    });
}

printHS();