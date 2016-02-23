function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  colorMode(HSB, mouseX%360,mouseX%360,mouseX%360);
  rectMode(CENTER);
  background(mouseY%360, 100,100);
  noStroke();
  fill(360-mouseY%360, 360,360);
  rect(width/2,height/2, mouseY+1,mouseX+1);
}
