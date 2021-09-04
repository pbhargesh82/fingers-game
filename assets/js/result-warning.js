// show result or warning depending on the user's guess input.

document.getElementById("submit").onclick = function() {
    userFinger = document.getElementById("user-guess").value;
    if(userFinger > 5 || userFinger == "") { 
        
        // warning block so show warning and hide result.

        document.getElementById("warning").style.display = "block";
        document.getElementById("result-true").style.display = "none";
        document.getElementById("result-false").style.display = "none";
        document.getElementById("warning").innerHTML = "Please enter a number between 0-5."
    }else {

        // result block so show result and hide warning.

        document.getElementById("warning").style.display ="none";
        document.getElementById("result-true").style.display = "block";
        document.getElementById("result-false").style.display = "block";
        if(finger == userFinger) {
            document.getElementById("result-true").innerHTML = "Congratulations, you won."
            document.getElementById("result-false").style.display = "none";
        }else {
            document.getElementById("result-false").innerHTML = "Wrong guess, please try again."
            document.getElementById("result-true").style.display = "none";
        }
    }
}