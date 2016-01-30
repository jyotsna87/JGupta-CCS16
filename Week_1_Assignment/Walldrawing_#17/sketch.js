function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //var strokeColor = color(128,128,128)
  stroke(128,128,128);
  //stroke(255,204,0);
  strokeWeight(1)
  for(i=0;i<20*5;i=i+5)
  {
    line(50+i,50, 50+i,500)
  }
  for(i=0;i<100*5-50;i=i+5)
  {
    line(200,50+i,300,50+i)
  }
  
  //rect(400,50,100,450)
  stroke(192,192,192);
  var x1,y1,x2,y2,x3,y3,x4,y4;
  x1=350; y1=50;
  x2=350+100,y2=50;
  x3=350,y3=50+450;
  x4=350+100,y4=50+450
  
  for(i=0;i<(x2-x1);i=i+5)
  {
    line(x1,y1+i,x1+i,y1)
  }
  
  for(j=0;j<(y3-y1)-(x2-x1);j=j+5)
  {
    line(x1,y1+i+j,x2,y2+j)
  }
  
 for(k=0;k<=(x4-x3);k=k+5)
  {
    line(x3+k,y3,x4,y2+j+k)
  }

  //*

  stroke(192,192,192);
  var x1,y1,x2,y2,x3,y3,x4,y4;
  x1=500; y1=50;
  x2=500+100,y2=50;
  x3=500,y3=50+450;
  x4=500+100,y4=50+450
  for(i=0;i<(x2-x1);i=i+5)
  {
    line(x2,y2+i,x2-i,y2)
  }
  for(j=0;j<(y4-y2)-(x2-x1);j=j+5)
  {
    line(x2,y2+i+j,x1,y1+j)
  }
  
  for(k=0;k<(x4-x3);k=k+5)
  {
    line(x4-k,y4,x3,y1+j+k)
  }
 //line(x4-5,y4,y1+j+5,x3)
 /*
    for(k=0;k<(x4-x3);k=k+5)
    {
      line(x4-k,y4,x3,y1+j+k)
    }
    */
    
}