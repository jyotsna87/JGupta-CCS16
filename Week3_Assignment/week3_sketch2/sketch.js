function setup() {
  createCanvas(windowWidth,windowHeight);
  
}

function draw() {
  background(200, 222, 189);
  strokeWeight(2);
  stroke(229,255,204);
  for(var x=0; x<=width; x+=25){
    for (var y=0; y<=height; y+=25){
      fill(random(255),random(102),random(102))
     
      rect(x,y,20,20);
      //
      //vertex(14,112);
      //bezierVertex(71,64,180,91,246,155);
      //bezierVertex(302,271,358,163,424,93);
      //bezierVertex(526,63,592,116,561,188);
      //bezierVertex(551,279,448,331,511,374);
      //bezierVertex(561,464,556,515,535,514);
      //bezierVertex(393,519,302,389,221,513);
      //bezierVertex(94,536,73,510,43,514);
      //bezierVertex(52,448,108,364,163,332);
      //bezierVertex(80,306,46,188,14,112);
      //endShape();
      
    }
  }
  
}