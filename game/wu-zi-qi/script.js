var myWin = [];
var compWin = [];
var compover = false;
var count = 0;
var allWin = [];
var mystep = false;
var step = 0;
var maparr = [];
var newpos = document.getElementById("newpos");
var o = document.getElementById("canvas");
var startbtn = document.getElementById("startbtn");

var canvas = document.querySelector("#canvas");
var context = canvas.getContext("2d");
var ChessColor = ["black", "#fafafa"];

function start() {}

function init(success) {
  myWin = [];
  compWin = [];
  compover = false;
  count = 0;
  allWin = [];
  mystep = false;
  step = 0;
  maparr = [];
  newpos.style = "display:none";
  context.clearRect(0, 0, 480, 480);
  for (var i = 1; i < 16; i++) {
    maparr[i] = [];
    for (var j = 1; j < 16; j++) {
      maparr[i][j] = 0;
    }
  }

  context.lineWidth = 1;
  context.strokeStyle = "#67563c";
  context.shadowBlur = 0;
  context.shadowColor = "rgba(0,0,0,0)";

  for (var i = 0; i < 15; i++) {}
}
