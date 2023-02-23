function setup() {
    stop();
}

function start() {
    document.getElementById("ball").style["animation-name"] = "myfirst";
    document.getElementById("player1").style["animation-name"] = "flip";
    document.getElementById("player2").style["animation-name"] = "flip";

    document.getElementById("start-btn").disabled = true;
    document.getElementById("stop-btn").disabled = false;
}

function stop() {
    document.getElementById("ball").style["animation-name"] = "none";
    document.getElementById("player1").style["animation-name"] = "none";
    document.getElementById("player2").style["animation-name"] = "none";

    document.getElementById("start-btn").disabled = false;
    document.getElementById("stop-btn").disabled = true;
}

