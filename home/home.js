// Declaring variables
const showcaseIMG = document.getElementById("canImg");

const orangeCanImg = "assets/orangecan.png";
const strawbCanImg = "assets/strawbcan.png";
const tropicCanImg = "assets/tropicalcan.png";
const cherryCaNImg = "assets/cherrycan.png";

var orangeCan = document.getElementById('orange');
var strawbCan = document.getElementById('strawb');
var tropicCan = document.getElementById('tropical');
var cherryCan = document.getElementById('cherry');

strawbCan.onclick = changePicToStrawb;
orangeCan.onclick = changePicToOrange;
tropicCan.onclick = changePicToTropical;
cherryCan.onclick = changePicToCherry;

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

function changePicToCherry() {
    showcaseIMG.src = cherryCaNImg;
    button.style.backgroundColor = "#a20d36";
}
