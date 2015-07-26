var canvas = document.querySelector("canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;

// setup
var steps = [];
var draw = [];
var painting = true;
var flip = 1;

// skew_a / skew_b = 0.5
// don't change for true isometric view
var skew_a = 0.577777777;
var skew_b = 1.155555555;

// 1 coord = 20px
var scale = 20;

// shift canvas (used to center 0,0,0)
var shiftx = canvas.width / 2;
var shifty = canvas.height / 2;

// cube position
var x = 0;
var y = 0;
var z = 0;

var ctx = canvas.getContext("2d");
ctx.font = "15px 'Helvetica Neue', Arial, sans-serif";