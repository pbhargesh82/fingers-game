// clear input field on-click, hide result and warning.

document.getElementById("user-guess").onclick = function() {
    document.getElementById("user-guess").value = "";
    // document.getElementById("warning").style.display = "none";
    document.getElementById("result-true").style.display = "none";
    document.getElementById("result-false").style.display = "none";
}