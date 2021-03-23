// Declaring variables
const showcaseIMG = document.getElementById("canImg");

const orangeCanImg = "assets/orangecan.png";
const strawbCanImg = "assets/strawbcan.png";
const tropicCanImg = "assets/tropicalcan.png";

var orangeCan = document.getElementById('orange');
var strawbCan = document.getElementById('strawb');
var tropicCan = document.getElementById('tropical');

strawbCan.onclick = changePicToStrawb;
orangeCan.onclick = changePicToOrange;
tropicCan.onclick = changePicToTropical;

var button = document.getElementById('button')


function changePicToStrawb() {
    showcaseIMG.src = strawbCanImg;
    button.style.backgroundColor = "#DE0000";
}

function changePicToOrange() {
    showcaseIMG.src = orangeCanImg;
    button.style.backgroundColor = "#ff6600";
}

function changePicToTropical() {
    showcaseIMG.src = tropicCanImg;
    button.style.backgroundColor = "#CD0177";
}
