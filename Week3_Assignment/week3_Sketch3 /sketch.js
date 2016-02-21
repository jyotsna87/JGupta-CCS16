  
  var color1;
  var color2;
  var color3;
  var color4;
  
  var color5;
  var color6;
  var color7;
  
  var color8;
  var color9;
  var color10;
  
  var color11;
  var color12;
  var arrayColors = [];
  var totalFrame=0;
  var totalColors=12;
  
function setup() {
  createCanvas(500,500);
  
   color1 = color(239,80,51);
    color2 = color(228,41,120);
    color3 = color(182,36,116);
    color4 = color(134,39,124);
  
    color5 = color(249,178,66);
    color6 = color(251,223,76);
    color7 = color(211,207,69);
  
    color8 = color(140,180,59);
    color9 = color(47,160,53);
    color10 = color(0,135,193);
  
    color11 = color(18,40,126);
    color12= color(0,75,150);
   
   arrayColors.push(color1);
   arrayColors.push(color2);
   arrayColors.push(color3);
   arrayColors.push(color4);
   arrayColors.push(color5);
   arrayColors.push(color6);
   arrayColors.push(color7);
   arrayColors.push(color8);
   arrayColors.push(color9);
   arrayColors.push(color10);
   arrayColors.push(color11);
   arrayColors.push(color12);
   
  
}

function draw(){
  drawSquares();
}
function drawSquares() {
  var fr = 1;
  frameRate(fr); 
  
  
  //var size = 125
  noStroke();
  var blockSize = 125;
  
  circluarLoopForcolors(totalFrame)
  //firstright row squares
  
  
  var k=0;
    
    var blockStart =0;
    var x = 0;
    var y = 0;
    var p=0;
    
  
    
  for(var totalDim=500*500;floor(totalDim,2)>1; totalDim/=2)
  {
     //print(floor(totalDim,2))
     //if(p==3)
     //break;
     p++;
     p=p+totalFrame;
     
    for(x=blockStart;x<blockStart+(4*blockSize);x+=blockSize)
    {
      
        //print(totalDim)
      if(k==0)
        fill(color1);
      if(k==1)
        fill(color12);
      if(k==2)
        fill(color11);
      if(k==3)
        fill(color10);
        //print(blockSize)
      rect(x,blockStart,blockSize,blockSize);
      k++;
    }
  //firstleft row squares  
  
  k=0;
    for(y=blockStart+blockSize;y<blockStart+4*blockSize;y+=blockSize)
    {
      
      if(k==0)
        fill(color2);
      if(k==1)
        fill(color3);
      if(k==2)
        fill(color4);
     
      rect(blockStart,y,blockSize,blockSize);
      k++;
    }
  
  
  //second left row squares
  
  k=0;
    for(x=blockStart+blockSize;x<blockStart+4*blockSize;x+=blockSize)
    {
      
      if(k==0)
        fill(color5);
      if(k==1)
        fill(color6);
      if(k==2)
        fill(color7);
     
      rect(x,500-blockSize-blockStart,blockSize,blockSize);
      k++;
    }
  
  
  
  
  k=0;
    for(y=blockStart+blockSize;y<blockStart+3*blockSize;y+=blockSize)
    {
      
      if(k==0)
        fill(color9);
      if(k==1)
        fill(color8);
   
      rect(500-blockSize-blockStart,y,blockSize,blockSize);
      k++;
    }
    blockStart +=blockSize;
    blockSize /=2;
    circluarLoopForcolors(p)
    //print(blockStart)
  }
  
  totalFrame +=1;
  
  if(totalFrame==12)
  {
    totalFrame = 0
  }
}


function circluarLoopForcolors(frame_no)
{
  var i = 0;
    i = frame_no
    //print(i%totalColors)
    if(totalFrame!=0)
    {
    color1 = arrayColors[(totalColors-1+i)%totalColors];
    color2 = arrayColors[(0+i)%totalColors];
    color3 = arrayColors[(1+i)%totalColors];
    color4 = arrayColors[(2+i)%totalColors];
    color5 = arrayColors[(3+i)%totalColors];
    color6 = arrayColors[(4+i)%totalColors];
    color7 = arrayColors[(5+i)%totalColors];
    color8 = arrayColors[(6+i)%totalColors];
    color9 = arrayColors[(7+i)%totalColors];
    color10 = arrayColors[(8+i)%totalColors];
    color11 = arrayColors[(9+i)%totalColors];
    color12 = arrayColors[(10+i)%totalColors];
    }
}

