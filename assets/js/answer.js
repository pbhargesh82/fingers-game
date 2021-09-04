// hide-Show the answer of the game.

document.getElementById("hide-ans-btn").style.display = "none";

document.getElementById("show-ans-btn").onclick = function() {
   document.getElementById("hide-ans-btn").style.display = "inline";
   document.getElementById("show-ans-btn").style.display = "none";
   document.getElementById("show-ans").style.display = "block";
   document.getElementById("show-ans").innerHTML = "Your answer is: " + finger;
}

document.getElementById("hide-ans-btn").onclick = function() {
   document.getElementById("show-ans").style.display = "none";
   document.getElementById("hide-ans-btn").style.display = "none";
   document.getElementById("show-ans-btn").style.display = "inline";
}