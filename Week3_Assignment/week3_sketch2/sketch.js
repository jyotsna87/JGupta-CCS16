function setup() {
  createCanvas(550,550);
}

function draw() {
  background(47, 93, 230);
  
  //bigstar
  
  for(var x=0; x<=width; x=x+180){
    for (var y=0; y<=height; y=y+180){
  
  
    beginShape();
      fill(random(255),255,random(255));
      strokeWeight(2);
      stroke(21, 52, 80);
      vertex(93+x,56+y);
      vertex(104+x,68+y);
      vertex(120+x,68+y);
      vertex(120+x,83+y);
      vertex(130+x,94+y);
      vertex(120+x,104+y);
      vertex(120+x,120+y);
      vertex(102+x,120+y);
      vertex(93+x,132+y);
      vertex(82+x,120+y);
      vertex(66+x,120+y);
      vertex(66+x,105+y);
      vertex(56+x,94+y);
      vertex(66+x,85+y);
      vertex(66+x,68+y);
      vertex(81+x,68+y);
      vertex(93+x,56+y);
      //print(x)
   endShape();
   
   //topleftquad
   beginShape();
    strokeWeight(2);
    stroke(21, 52, 80);
    fill(243, 115, 237);
    quad(0+x,0+y,40+x,0+y,24+x,30+y,0+x,40+y);
  endShape();
  
  //toprightquad
  beginShape();
    strokeWeight(2);
    stroke(21, 52, 80);
    fill(243, 115, 237);
    quad(146+x,0+y,156+x,30+y,180+x,40+y,180+x,0+y);
  endShape();
  
  //bottomrightquad
  beginShape();
    strokeWeight(2);
    stroke(21, 52, 80);
    fill(243, 115, 237);
    quad(180+x,146+y,156+x,159+y,146+x,180+y,180+x,180+y);
  endShape();
  
  //bottomleftquad
  beginShape();
   strokeWeight(2);
   stroke(21, 52, 80);
   fill(243, 115, 237);
   quad(40+x,180+y,0+x,180+y,0+x,146+y,30+x,159+y);
  endShape();
  
  //topleftdiamondshape
  beginShape();
    strokeWeight(2);
    stroke(21, 52, 80);
    fill(70,130,180);
    vertex(66+x,68+y);
    vertex(30+x,68+y);
    vertex(56+x,93+y);
    vertex(66+x,84+y);
    vertex(66+x,68+y);
  endShape();
  //nextdiamondshape
  beginShape();
    strokeWeight(2);
    stroke(21, 52, 80);
    fill(70,130,180);
    vertex(82+x,68+y);
    vertex(66+x,68+y);
    vertex(66+x,30+y);
    vertex(93+x,57+y);
    vertex(82+x,68+y);
  endShape();
  
  //nextdiamondshape
  beginShape();
    strokeWeight(2);
    stroke(21, 52, 80);
    fill(70,130,180);
    vertex(93+x,57+y);
    vertex(120+x,30+y);
    vertex(120+x,68+y);
    vertex(104+x,68+y);
    vertex(93+x,57+y);
  endShape();
  
  //nextdiamondshape
  beginShape();
    strokeWeight(2);
    stroke(21, 52, 80);
    fill(70,130,180);
    vertex(131+x,94+y);
    vertex(158+x,120+y);
    vertex(120+x,120+y);
    vertex(120+x,105+y);
    vertex(131+x,94+y);
  endShape();
  
  //nextdiamondshape
  beginShape();
    strokeWeight(2);
    stroke(21, 52, 80);
    fill(70,130,180);
    vertex(120+x,120+y);
    vertex(120+x,158+y);
    vertex(93+x,131+y);
    vertex(104+x,120+y);
    vertex(120+x,120+y);
  endShape();
  
  
  //diamondshape
  beginShape();
    strokeWeight(2);
    stroke(21, 52, 80);
    fill(70,130,180);
    vertex(120+x,68+y);
    vertex(156+x,68+y);
    vertex(131+x,93+y);
    vertex(120+x,84+y);
    vertex(120+x,68+y);
  endShape();
 
 //next diamond shape
  beginShape();
    strokeWeight(2);
    stroke(21, 52, 80);
    fill(70,130,180);
    vertex(93+x,131+y);
    vertex(66+x,158+y);
    vertex(66+x,120+y);
    vertex(83+x,120+y);
    vertex(93+x,131+y);
  endShape(); 
  
  //next diamond shape
  beginShape();
    strokeWeight(2);
    stroke(21, 52, 80);
    fill(70,130,180);
    vertex(68+x,120+y);
    vertex(30+x,120+y);
    vertex(56+x,94+y);
    vertex(68+x,105+y);
    vertex(68+x,120+y);
  endShape(); 
  
  //next diamond shape
  beginShape();
    strokeWeight(2);
    stroke(21, 52, 80);
    fill(70,130,180);
    vertex(68+x,120+y);
    vertex(30+x,120+y);
    vertex(56+x,94+y);
    vertex(68+x,105+y);
    vertex(68+x,120+y);
  endShape(); 
  
  // big hexagon shape
  beginShape();
    strokeWeight(2);
    stroke(21, 52, 80);
    fill( 243, 200, 68);
    vertex(93+x,58+y);
    vertex(66+x,30+y);
    vertex(66+x,15+y);
    vertex(93+x,0+y);
    vertex(120+x,15+y);
    vertex(120+x,30+y);
    vertex(93+x,58+y);
  endShape(); 
  
  // big hexagon shape
  beginShape();
  strokeWeight(2);
  stroke(21, 52, 80);
  fill( 243, 200, 68);
    vertex(120+x,30+y);
    vertex(130+x,20+y);
    vertex(156+x,30+y);
    vertex(168+x,58+y);
    vertex(157+x,68+y);
    vertex(120+x,68+y);
    vertex(120+x,30+y);
  endShape();
  
  // big hexagon shape
  beginShape();
    strokeWeight(2);
    stroke(21, 52, 80);
    fill( 243, 200, 68);
    vertex(130+x,94+y);
    vertex(157+x,68+y);
    vertex(172+x,68+y);
    vertex(183+x,94+y);
    vertex(172+x,120+y);
    vertex(157+x,120+y);
    vertex(130+x,94+y);
  endShape();
  
   // big hexagon shape
  beginShape();
    strokeWeight(2);
    stroke(21, 52, 80);
    fill( 243, 200, 68);
    vertex(157+x,120+y);
    vertex(168+x,130+y);
    vertex(158+x,158+y);
    vertex(130+x,170+y);
    vertex(120+x,158+y);
    vertex(120+x,120+y);
    vertex(157+x,120+y);
  endShape();
  
  // big hexagon shape
  beginShape();
    strokeWeight(2);
    stroke(21, 52, 80);
    fill( 243, 200, 68);
    vertex(120+x,157+y);
    vertex(120+x,174+y);
    vertex(93+x,185+y);
    vertex(66+x,174+y);
    vertex(66+x,157+y);
    vertex(93+x,130+y);
    vertex(120+x,157+y);
  endShape();
  
  
  // big hexagon shape
  beginShape();
    strokeWeight(2);
    stroke(21, 52, 80);
    fill( 243, 200, 68);
    vertex(66+x,158+y);
    vertex(55+x,169+y);
    vertex(30+x,158+y);
    vertex(20+x,130+y);
    vertex(30+x,120+y);
    vertex(66+x,120+y);
    vertex(66+x,158+y);
  endShape();
  
   // big hexagon shape
  beginShape();
    strokeWeight(2);
    stroke(21, 52, 80);
    fill( 243, 200, 68);
    vertex(30+x,120+y);
    vertex(14+x,120+y);
    vertex(0+x,94+y);
    vertex(14+x,68+y);
    vertex(30+x,68+y);
    vertex(56+x,94+y);
    vertex(30+x,120+y);
  endShape();

  
   // big hexagon shape
  beginShape();
    strokeWeight(2);
    stroke(21, 52, 80);
    fill( 243, 200, 68);
    vertex(66+x,68+y);
    vertex(30+x,68+y);
    vertex(18+x,58+y);
    vertex(26+x,30+y);
    vertex(56+x,20+y);
    vertex(68+x,30+y);
    vertex(66+x,68+y);
  endShape();
  
  }
 } 
}

