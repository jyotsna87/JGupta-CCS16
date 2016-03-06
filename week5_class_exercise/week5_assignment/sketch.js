function setup() {
  createCanvas(800,1000); 
}

function draw(){
  background(100);
  fluffybody();
  sheephead();
  leftear();
  rightear();
  lefteye();
  righteye();
  leftleg();
  rightleg();
  lefthand();
  righthand();
  
}

function fluffybody(){
  push();
  translate(110,110);
  stroke(0);
  strokeWeight(2);
  fill(242,233,216);
  beginShape();
  vertex(291,109);
  bezierVertex(275,89,245,102,235,79);
  bezierVertex(219,91,198,71,168,90);
  bezierVertex(148,71,126,92,95,83);
  bezierVertex(76,109,54,136,65,171);
  bezierVertex(42,202,53,239,52,271);
  bezierVertex(70,280,79,302,121,304);
  bezierVertex(130,324,162,322,189,334);
  bezierVertex(222,322,258,332,270,306);
  bezierVertex(295,298,301,270,321,256);
  endShape();
  pop();
}



function sheephead(){
  push();
  translate(110,110);
  stroke(35,33,34);
  strokeWeight(4);
  fill(48,44,45);
  beginShape();
  vertex(320,107);
  bezierVertex(280,160,273,217,312,256);
  bezierVertex(347,252,377,208,365,160);
  bezierVertex(340,116,318,108,320,107);
  endShape();
  pop();
}

 function leftear(){
  push();
  translate(110,110);
  fill(0);
  beginShape();
  vertex(298,135);
  bezierVertex(258,153,234,190,228,219);
  bezierVertex(246,210,269,178,298,135);
  endShape();
  pop();
}

function rightear(){
  push();
  translate(110,110);
  fill(0);
  beginShape();
  vertex(356,141);
  bezierVertex(375,139,402,168,416,213);
  bezierVertex(389,189,366,156,345,129);
  endShape();
  pop();
}
  


function lefteye() {
  push();
  translate(110,110);
  stroke(35,33,34);
  strokeWeight(2);
  fill(251,251,239);
  ellipse(312,135,40,35);
  noStroke();
  fill(0);
  ellipse(318,140,6,6);
  pop();
  
}
  
  function righteye() {
  push();
  translate(110,110);
  stroke(35,33,34);
  strokeWeight(2);
  fill(251,251,239);
  ellipse(341,146,25,20);
  noStroke();
  fill(0);
  ellipse(337,145,6,6);
  pop();
  }
  
  function leftleg(){
  push();
  translate(110,110);
  stroke(35,33,34);
  strokeWeight(3);
  fill(51,45,47);
  beginShape();
  vertex(103,272);
  bezierVertex(95,305,93,385,99,385);
  bezierVertex(128,362,122,318,119,273);
  endShape();
  }
  
 function rightleg(){
  push();
  translate(110,110);
  stroke(35,33,34);
  strokeWeight(3);
  fill(51,45,47);
  beginShape();
  vertex(135,295);
  bezierVertex(95,305,93,385,99,385);
  bezierVertex(128,362,122,318,119,273);
  endShape();
  }
  
  