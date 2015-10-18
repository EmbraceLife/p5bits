// use createButton to add button on page
// also use mousePressed function to call actions

var bgcolor;
var button;


function setup() {
  canvas = createCanvas(200, 200);
  bgcolor = color(200);
  button = createButton("go go go go");
  button.mousePressed(changeColor);
  
}

function changeColor() {
  bgcolor = color(random(255))
  
}

// function mousePressed() {
//   changeColor();
// }


function draw() {
  background(bgcolor);
  fill(255, 0, 175);
  rect(100, 100, 50, 50);

}