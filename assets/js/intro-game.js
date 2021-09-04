document.getElementById("game").style.display = "none";

document.getElementById("start-game").onclick = function() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("game").style.display = "block";

    document.getElementById("intro").style.display = "none";

    document.getElementById("close-btn").onclick = function() {
        document.getElementById("game").style.display = "none";
        document.getElementById("intro").style.display = "block";
    }
}

