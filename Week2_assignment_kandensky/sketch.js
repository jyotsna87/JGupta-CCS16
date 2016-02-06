  
function setup() {
  createCanvas(610,733);
  
  
}
 var squarex1=203;
 var squarey1=300;
 var squarex2=209;
 var squarey2=295;
 var squarex3=213;
 var squarey3=301;
 var squarex4=207;
 var squarey4=306;
 


 var linex1=311;
 var liney1=280;
 var linex2=332;
 var liney2=284;

var ellipseXcenter=368;
  var ellipseYcenter=226;
  var ellipseheight=10;
  var ellipsewidth=10;
  
  var circleX=212;
  var circleY=203;
  var circleH=140;
  var circleW=140;
  
  var dotX=407;
  var dotY=249;
  var dotH=6;
  var dotW=6;
  
function draw() {
  background(215,208,201);
  
  
  //boattop
  
  
  fill(181,125,113);
 stroke(181,125,113);

 beginShape();
 vertex(231, 355);
  bezierVertex(247,345,277,335,308,327);
  bezierVertex(335,320,392,325,364.5, 333);
  bezierVertex(333,330,314,336,298,340);
  bezierVertex(279,345,262,354,247,361);
  bezierVertex(234,387,229,364,231,355);
 endShape();
  
  fill(181,125,113);
 stroke(181,125,113);
 
 beginShape();
 vertex(368.5, 327);
  bezierVertex(369,338,355,349,344,365);
  bezierVertex(327,380,311,396,292,413);
  bezierVertex(268,430,257,438,235,430);
  bezierVertex(273,425,285,414,302,398);
  bezierVertex(319,381,334,367,347,349);
  bezierVertex(354,341,359,331,358,334);
endShape();
 
 //boat top outline
 noFill()
 stroke(19,14,18);
 strokeWeight(1);
 bezier(232.5, 355.5,323.5, 302.5,374.5, 329.5,374.5, 329.5)
 bezier(368.5, 327,382, 329.5,273.5, 445.5,242, 434.5) 
  //end boat top outline
  
  
  
  //wavy water black and grey
  
   //firstwave
  
  noFill();
  strokeWeight(3);
  stroke(19,14,18);
  beginShape();
vertex(142,363);
bezierVertex(139,347, 149, 333, 167, 333);
bezierVertex(185, 343, 196, 359, 200, 385);
bezierVertex(207, 397, 219, 407, 229, 422);
bezierVertex(239, 452, 248, 469, 268, 479);
bezierVertex(292, 499, 308, 524, 323, 556);
bezierVertex(339, 576, 347, 585, 364, 599);
endShape();

noFill();
  strokeWeight(3);
  stroke(142,145,154);
  beginShape();
vertex(142,363);
bezierVertex(142,350, 149, 336, 167, 337);
bezierVertex(185, 346, 196, 362, 200, 388);
bezierVertex(207, 400, 219, 410, 229, 425);
bezierVertex(239, 455, 248, 471, 268, 481);
bezierVertex(292, 501, 308, 526, 323, 558);
bezierVertex(339, 580, 347, 589, 364, 601);
endShape();


//secondwave

noFill();
  strokeWeight(3);
  stroke(19,14,18);
  beginShape();
vertex(160,382);
bezierVertex(160,370, 174, 369, 180, 375);
bezierVertex(187, 403, 192, 415, 209, 428);
bezierVertex(215, 438, 221, 460, 229, 470);
bezierVertex(252, 487, 260, 495, 277, 510);
bezierVertex(290, 529, 303, 551, 336, 609);

endShape();

noFill();
  strokeWeight(3);
  stroke(142,145,154);
  beginShape();
vertex(160,382);
bezierVertex(158,370, 172, 369, 182, 375);
bezierVertex(185, 405, 190, 417, 207, 430);
bezierVertex(213, 440, 219, 462, 227, 472);
bezierVertex(249, 491, 259, 498, 275, 513);
bezierVertex(288, 531, 301, 553, 335, 610);
endShape();



//third wave

noFill();
  strokeWeight(3);
  stroke(142,145,154);
  beginShape();
vertex(166,421);//160,382
bezierVertex(166,409, 180, 408, 175, 412);
bezierVertex(178, 420, 184, 434, 215, 467);
bezierVertex(221, 477, 227, 499, 235, 509);
bezierVertex(258, 526, 266, 534, 283, 549);
bezierVertex(297, 568, 309, 590, 318, 615);

endShape();

noFill();
  strokeWeight(3);
  stroke(19,14,18);
  beginShape();
vertex(166,416);//166,421
bezierVertex(166,404, 180, 403, 175, 407);
bezierVertex(178, 415, 184, 429, 215, 462);
bezierVertex(221, 472, 227, 494, 235, 504);
bezierVertex(258, 521, 266, 529, 283, 544);
bezierVertex(297, 563, 309, 585, 318, 610);
endShape();

//end wavy water black and grey


//small ellipse(dots created)

noFill();
  stroke(19,14,18);
  strokeWeight(2);
  ellipseXcenter=425;
  ellipseYcenter=220;
  ellipse(ellipseXcenter,ellipseYcenter,ellipseheight-2,ellipsewidth-2);
  
  
 
  fill(19,14,18);
  strokeWeight(0);
  noStroke();
  ellipseXcenter=368;
  ellipseYcenter=226;
  ellipse(ellipseXcenter,ellipseYcenter,ellipseheight,ellipsewidth);

  
  fill(19,14,18);
  strokeWeight(0);
  noStroke();
  ellipseXcenter=170;
 ellipseYcenter=353;
  ellipse(ellipseXcenter,ellipseYcenter,ellipseheight,ellipsewidth);
  
  fill(19,14,18);
  strokeWeight(2);
  stroke(170,122,109);
  ellipseXcenter=329;
  ellipseYcenter=402;
  ellipse(ellipseXcenter,ellipseYcenter,ellipseheight,ellipsewidth);

  fill(19,14,18);
  strokeWeight(0);
  noStroke();
  ellipse(circleX,circleY,circleH,circleW);
  
  fill(19,14,18);
  strokeWeight(0);
  noStroke();
  ellipse(dotX,dotY,dotH,dotW);
  

  noFill();
  stroke(136,111,106);
  strokeWeight(2);
  ellipse(circleX,circleY,circleH-20,circleW-20);
  
  noFill();
  stroke(205,202,195);
  strokeWeight(3);
  ellipse(circleX,circleY,circleH-35,circleW-35);
  
  fill(141,144,159);
  strokeWeight(0);
  noStroke();
  ellipse(circleX,circleY,circleH-40,circleW-40);
  
  fill(19,14,18);
  strokeWeight(0);
  noStroke();
  ellipse(circleX,circleY,circleH-75,circleW-75);
  
  noFill();
  stroke(19,14,18);
  strokeWeight(5);
  line(143,490,435,124);
  
  noFill();
  stroke(19,14,18);
  strokeWeight(10);
  triangle(403,526,446,502,447,543);
  
  fill(19,14,18);
  strokeWeight(0);
  noStroke();
  rect(260,298,10,10);
  
  
  noFill();
  stroke(19,14,18);
  strokeWeight(1);
  line(221,326,412,144);
  
  noFill();
  stroke(19,14,18);
  strokeWeight(1.5);
  line(382,130,455,235);
  
  noFill();
  stroke(19,14,18);
  strokeWeight(1.5);
  line(397,134,469,224);
  
  noFill();
  stroke(19,14,18);
  strokeWeight(1);
  line(262,444,417,143);
  
  noFill();
  stroke(19,14,18);
  strokeWeight(1.5);
  line(215,278,257,361);
  
   noFill();
  stroke(19,14,18);
  strokeWeight(1.5);
  line(264,577,328,203);
  
  noFill();
  stroke(19,14,18);
  strokeWeight(1.5);
  line(277,573,338,219);
  
  
  //square
  
  fill(19,14,18);
  strokeWeight(0);
  noStroke();
  quad(squarex1,squarey1,squarex2,squarey2,squarex3,squarey3,squarex4,squarey4);
  
  fill(19,14,18);
  strokeWeight(0);
  noStroke();
  quad(squarex1+171,squarey1+93,squarex2+173,squarey2+100,squarex3+165,squarey3+100,squarex4+163,squarey4+95);
  
  
  noFill();
  stroke(19,14,18);
  strokeWeight(5);
  quad(310,435,320,435,320,446,310,446);
  
  fill(159,163,174);
  strokeWeight(0);
  noStroke();
  quad(313,506,324,507,322,517,312,515);
  
 //triangles fill
  fill(159,163,174);
  strokeWeight(0);
  noStroke();
  triangle(350,413,363,404,356,420);
 
 fill(159,163,174);
  strokeWeight(0);
  noStroke();
  triangle(359,266,391,219,406,237);
  

  

  fill(19,14,18);
  strokeWeight(0);
  noStroke();
  dotX=406;
  dotY=285;
  ellipse(dotX,dotY,dotH,dotW);//some problem with this code

//lines 

  noFill();
  stroke(19,14,18);
  strokeWeight(1.5);
  line(linex1,liney1,linex2,liney2);
  
  noFill();
  stroke(19,14,18);
  strokeWeight(1.5);
  line(linex1-6,liney1+18,linex2-1,liney2+18);
  
   noFill();
  stroke(19,14,18);
  strokeWeight(1.5);
  line(linex1-10,liney1+37,linex2-4,liney2+37);
  
  noFill();
  stroke(19,14,18);
  strokeWeight(1.5);
  line(linex1-14,liney1+55,linex2-7,liney2+55);
  
  
  noFill();
  stroke(19,14,18);
  strokeWeight(1.5);
  line(linex1-18,liney1+73,linex2-11,liney2+73);
  
  noFill();
  stroke(19,14,18);
  strokeWeight(1.5);
  line(linex1-22,liney1+91,linex2-15,liney2+91);
  
  noFill();
  stroke(19,14,18);
  strokeWeight(1.5);
  line(linex1-24,liney1+109,linex2-17,liney2+109);
  
  noFill();
  stroke(19,14,18);
  strokeWeight(1.5);
  line(linex1-32,liney1+127,linex2-10,liney2+127);
  
  noFill();
  stroke(19,14,18);
  strokeWeight(1.5);
  line(linex1-42,liney1+145,linex2-7,liney2+145);
  
  noFill();
  stroke(19,14,18);
  strokeWeight(1.5);
  line(linex1-29,liney1+165,linex2-11,liney2+165);

noFill();
  stroke(19,14,18);
  strokeWeight(1.5);
  line(linex1-40,liney1+225,linex2-40,liney2+225);

noFill();
  stroke(19,14,18);
  strokeWeight(1.5);
  line(linex1-50,liney1+245,linex2-35,liney2+245);

noFill();
  stroke(19,14,18);
  strokeWeight(1.5);
  line(linex1-65,liney1+270,linex2-30,liney2+270);

  noFill();
  stroke(19,14,18);
  strokeWeight(5);
  bezier(264, 463, 283, 475, 300,479,325,475);
  
  noFill();
  stroke(19,14,18);
  strokeWeight(5);
  bezier(325,475,364,463,385,446,399,419);//399,419

 noFill();
  stroke(19,14,18);
  strokeWeight(5);
  bezier(399,419,408,389,433,349,449,341);

noFill();
  stroke(19,14,18);
  strokeWeight(5);
  bezier(449,341,463,341,471,357,463,366);
  
 
 // three black and brown curve in the end
 
 //brown curve
  noFill();
  stroke(167,118,109);
  strokeWeight(2);
  bezier(266, 465, 285, 477, 302,481,327,477);
  
 noFill();
  stroke(167,118,109);
  strokeWeight(2);
  bezier(327,477,366,465,387,448,401,421);//399,419

 noFill();
  stroke(167,118,109);
  strokeWeight(2);
  bezier(401,421,410,391,435,351,451,343);

noFill();
  stroke(167,118,109);
  strokeWeight(2);
  bezier(451,343,465,343,473,359,465,368);

 
 
 //blacksecondcurve
 noFill();
  stroke(19,14,18);
  strokeWeight(4);
  bezier(271,475,303,485,337,487,360,480);

  noFill();
  stroke(19,14,18);
  strokeWeight(4);
  bezier(360,480,380,469,406,436,417,409);
  
  noFill();
  stroke(19,14,18);
  strokeWeight(4);
  bezier(417,409,424,388,431,377,438,368);

  noFill();
  stroke(19,14,18);
  strokeWeight(5);
  bezier(438,368,447,363,455,366,450,373);
  
  //brownsecondcurve
  
  noFill();
  stroke(167,118,109);
  strokeWeight(2);
  bezier(273,477,305,487,339,489,362,482);
  
  noFill();
  stroke(167,118,109);
  strokeWeight(2);
  bezier(362,482,382,471,408,438,419,411);
  
  noFill();
 stroke(167,118,109);
  strokeWeight(2);
  bezier(419,411,425,390,433,379,440,370);

  noFill();
  stroke(167,118,109);
  strokeWeight(2);
  bezier(440,370,449,365,457,368,452,375);
  
  //blackthirdcurve
  
  noFill();
  stroke(19,14,18);
  strokeWeight(4);
  bezier(283,491,307,498,337,498,359,492);
  
  noFill();
  stroke(19,14,18);
  strokeWeight(4);
  bezier(359,492,383,482,398,468,409,448);

 noFill();
  stroke(19,14,18);
  strokeWeight(4);
  bezier(409,448,419,427,429,399,438,387);
 
 noFill();
  stroke(19,14,18);
  strokeWeight(5);
  bezier(438,387,447,377,452,382,447,396); 
  

  //brownthirdcurve
  
  noFill();
  stroke(167,118,109);
  strokeWeight(2);
bezier(285,493,309,500,339,500,361,494);
  
  noFill();
  stroke(167,118,109);
  strokeWeight(2);
  bezier(361,494,385,484,400,470,411,450);

 noFill();
  stroke(167,118,109);
  strokeWeight(2);
  bezier(411,450,421,429,431,401,440,389);
 
 noFill();
  stroke(167,118,109);
  strokeWeight(2);
  bezier(440,389,449,379,454,384,449,398); 
  
  //dots
  
  fill(19,14,18);
  strokeWeight(0);
  noStroke();
  ellipse(183,365,6,6);
  
   fill(19,14,18);
  strokeWeight(0);
  noStroke();
  ellipse(197,408,5,5);
  
  fill(19,14,18);
  strokeWeight(0);
  noStroke();
  ellipse(223,453,5,5);
  
  fill(19,14,18);
  strokeWeight(0);
  noStroke();
  ellipse(389,499,7,7);
  

   
   fill(19,14,18);
  strokeWeight(0);
  noStroke();
  ellipse(418,451,6,5);
  
   fill(19,14,18);
  strokeWeight(0);
  noStroke();
  ellipse(212,466,5,5);
  
   fill(19,14,18);
  strokeWeight(0);
  noStroke();
  ellipse(189,462,7,7);
  
  fill(19,14,18);
  strokeWeight(0);
  noStroke();
  ellipse(301,536,6,6);
  
  fill(19,14,18);
  strokeWeight(0);
  noStroke();
  ellipse(276,498,6,6);
  
   fill(19,14,18);
  strokeWeight(0);
  noStroke();
  ellipse(170,387,5,5);
  
   fill(19,14,18);
  strokeWeight(0);
  noStroke();
  ellipse(405,286,5,4);
  
   fill(19,14,18);
  strokeWeight(0);
  noStroke();
  ellipse(408,450,4,5);
  
   fill(19,14,18);
  strokeWeight(0);
  noStroke();
  ellipse(189,381,5,5);
  
   fill(19,14,18);
  strokeWeight(0);
  noStroke();
  ellipse(186,426,4,4);
  
   fill(19,14,18);
  strokeWeight(0);
  noStroke();
  ellipse(188,463,6,6);
  
   fill(19,14,18);
  strokeWeight(0);
  noStroke();
  ellipse(394,480,8,8);
  
   fill(19,14,18);
  strokeWeight(0);
  noStroke();
  ellipse(249,495,5,5);
  
   fill(19,14,18);
  strokeWeight(0);
  noStroke();
  ellipse(370,493,7,7);
  
  fill(19,14,18);
  strokeWeight(0);
  noStroke();
  ellipse(407,251,7,7);
  
  //black dots with stroke
  fill(19,14,18);
  strokeWeight(1)
 stroke(167,118,109);
  ellipse(348,255,8,7);
  
   fill(19,14,18);
  strokeWeight(1)
 stroke(167,118,109);
  ellipse(353,246,7,6);
  
   fill(19,14,18);
 noStroke();
  ellipse(212,422,5,5);
  
  fill(19,14,18);
 noStroke();
  ellipse(225,445,5,5);

  fill(19,14,18);
  strokeWeight(5)
 stroke(118,133,152);
  ellipse(453,324,8,8);
  
  //browntriangle
fill(167,118,109);
noStroke();
triangle(387,282,388,260,395,265);


  
  
  //outlined triangles
  
   noFill();
  stroke(19,14,18);
  strokeWeight(2);
triangle(351,273,401,219,417,236);

 
 
 noFill();
  stroke(19,14,18);
  strokeWeight(1.5);
triangle(383,280,395,258,405,269);


//big fish like curve shape
noFill();
stroke(19,14,18);
  strokeWeight(2);
  line(280,243,459,334);

noFill();
stroke(19,14,18);
strokeWeight(2);
bezier(280,243,306,243,326,247,350,262);  

noFill();
stroke(19,14,18);
strokeWeight(2);
bezier(350,262,369,271,391,285,459,334);

fill(19,14,18);
  strokeWeight(0);
  noStroke();
  ellipse(292,247,4,4);
 
 fill(19,14,18);
  strokeWeight(0);
  noStroke();
  ellipse(298,247,4,4);
  
  fill(19,14,18);
  strokeWeight(0);
  noStroke();
  ellipse(291,247,4,4);
  
   fill(19,14,18);
  strokeWeight(0);
  noStroke();
  ellipse(305,253,4,4);
  
   fill(19,14,18);
  strokeWeight(0);
  noStroke();
  ellipse(309,247,4,4);
  
  fill(19,14,18);
  strokeWeight(0);
  noStroke();
  ellipse(368,281,5,5);
  
    fill(19,14,18);
  strokeWeight(0);
  noStroke();
  ellipse(391,294,4,4);
  
    fill(19,14,18);
  strokeWeight(0);
  noStroke();
  ellipse(419,311,5,5);
  
    fill(19,14,18);
  strokeWeight(0);
  noStroke();
  ellipse(407,303,5,5);
  
  
  fill(19,14,18);
  strokeWeight(0);
  noStroke();
  ellipse(345,266,5,5);
  
  fill(19,14,18);
  strokeWeight(0);
  noStroke();
  ellipse(372,289,4,4);
  
 fill(19,14,18);
  strokeWeight(0);
  noStroke();
  ellipse(312,253,4,4); 
  
  fill(19,14,18);
  strokeWeight(0);
  noStroke();
  ellipse(388,291,5,5);
  
  
  fill(19,14,18);
  strokeWeight(0);
  noStroke();
  ellipse(318,253,4,4); 
  
  fill(19,14,18);
  strokeWeight(0);
  noStroke();
  quad(330,270,336,261,343,267,339,274);
  
  fill(19,14,18);
  strokeWeight(0);
  noStroke();
  quad(354,282,358,273,364,277,360,285);
  
  fill(19,14,18);
  strokeWeight(0);
  noStroke();
  quad(372,290,375,285,383,290,378,295);
  
  //smalldesigns
  
  fill(179,125,113);
  stroke(19,14,18);
  strokeWeight(1);
  triangle(328,453,348,427,340,454);
  
  fill(131,137,146);
  stroke(19,14,18);
  strokeWeight(1);
  triangle(339,445,349,443,344,453);  


  fill(19,14,18);
  strokeWeight(0);
  noStroke();
  quad(335,513,346,505,355,517,347,524);

  
  fill(179,125,113);
  strokeWeight(0);
  noStroke();
  quad(355,441,362,437,367,443,359,449);
  
 //boatbottom

 fill(19,14,18);
 noStroke();
 beginShape();
 vertex(201,373);
  bezierVertex(211,357,216,334,219,318);
  bezierVertex(223,306,227,317,227,336);
  bezierVertex(230,359,234,379,240,403);
  bezierVertex(248,425,257,442,268,458);
  bezierVertex(256,466,242,453,239,438);
  bezierVertex(230,418,231,405,226,388);
  bezierVertex(215,385,204,388,202,380);
  endShape();
  
  fill(19,14,18);
 stroke(182,131,123);
 strokeWeight(2);
 beginShape();
 vertex(262, 387);
  bezierVertex(267,377,275,364,279,377);
  bezierVertex(273,386,268,390,262,387);
  
 endShape();
  
  
  //boatinside
  
  noFill();
 stroke(19,14,18);
 strokeWeight(1);
 beginShape();
 vertex(239, 406);
  bezierVertex(253,391,264,377,272,363);
  bezierVertex(289,373,287,388,276,394);
  bezierVertex(263,399,239,406,263,399);
  bezierVertex(276,394,286,400,274,405);
  bezierVertex(263,406,251,408,239,406);
  
 endShape();
  
noFill();
 stroke(19,14,18);
 strokeWeight(1);
 beginShape();
 vertex(239, 406);
  bezierVertex(246,384,248,363,259,365);
  bezierVertex(255,382,252,392,239,406);
  
  fill(19,14,18);
 stroke(182,131,123);
 strokeWeight(3);
 beginShape();
 line(255,388,274,367);
 vertex(274,367);
 bezierVertex(283,377,275,389,255,390);
 endShape();

fill(19,14,18);
 stroke(182,131,123);
 strokeWeight(2);  
  ellipse(270,401,8,6)
  
noFill();
 stroke(19,14,18);
 strokeWeight(1);
 beginShape();
 vertex(239, 406);
  bezierVertex(247,381,247,367,258,365);
  bezierVertex(256,386,248,394,239, 406);
  
 endShape();
 
 fill(182,131,123);
 noStroke();
triangle(239,406,247,381,254,386);

fill(19,14,18);
 noStroke();
 quad(245,383,247,373,257,380,258,385);
  
  
  //appledesign
  
  fill(182,131,123);
 noStroke();
 beginShape();
 
 vertex(343.5, 159.5);
 bezierVertex(343.5, 159.5,352.88, 158.5,348.19, 166.5);
 bezierVertex(350.5, 160.5,345.5, 169.5,350.5, 169.5);
 bezierVertex(352.5, 173.5,345.5, 184.5,337.5, 178.5);
 bezierVertex(329.5, 175.5,329.5, 169.5,329.5, 169.5);
 bezierVertex(329.5, 169.5,326.5, 158.5,337.5, 155.5);
 bezierVertex(338.5, 155.5,342.5, 154.5,342.5, 159.5);
 endShape();
 
 //apple grey
 fill(140,147,159);
 noStroke();
 beginShape();
 
 vertex(384, 350);//343.5, 159.5
 bezierVertex(384, 350,393.38, 349,388.69, 357);
 bezierVertex(391, 351,386, 360,391, 360);
 bezierVertex(393, 364,386, 375,390, 369);
 bezierVertex(370, 366,370, 360,370, 360);
 bezierVertex(370, 360,367,359,378, 346);
 bezierVertex(379, 346,383, 345,383, 350);
 endShape();
 
 //blackoutline to dots
 
  noFill();
  stroke(19,14,18);
 strokeWeight(1);
 beginShape();
  vertex(343, 256);
 vertex(348,240);
 vertex(358,240);
 vertex(356,264);
 
 endShape();
 
 
 
 //griddesign
  
  fill(148,130,122);
 stroke(23,12,14);
 strokeWeight(2);
 beginShape();
 
 vertex(168.5, 522.5);
 bezierVertex(202.5, 522.5,199.5, 522.5,199.5, 522.5);
 bezierVertex(199.5, 522.5,204.5, 554.5,199.5, 554.5);
 bezierVertex(194.5, 554.5,168.5, 554.5, 168.5, 554.5);
 bezierVertex(168.5, 554.5,168.5, 550.5,168.5, 536.5);
 bezierVertex(168.5, 522.5,168.5, 522.5,168.5, 522.5);
 
 endShape();
 for(i=0;i<6*5;i=i+5)
 {
   line(172+i, 522.5,172+i,554)
 }
 
 for(i=0;i<6*5;i=i+3)
 {
   line(168, 527+i,199,527+i)
 }
 
 //sailboatflagdesign
 noFill();
 stroke(19,14,18);
 strokeWeight(1);
 
 beginShape();
 vertex(269.5, 405.5);//343.5, 159.5
 bezierVertex(278.5, 407.23,278.5, 411.56,269.5, 410.26);
 bezierVertex(265.5, 409.5,275.5, 414.5,262.5, 414.5);
 bezierVertex(260.5, 423.5,246.5, 420.5,246.5, 420.5);
 
 endShape();
 
 //moredots
 fill(19,14,18);
  strokeWeight(0);
  noStroke();
  ellipse(326,460,3.5,3.5);
 
 fill(19,14,18);
  strokeWeight(0);
  noStroke();
  ellipse(332,461,3.5,3.5);
  
  fill(19,14,18);
  strokeWeight(0);
  noStroke();
  ellipse(337,462,3.5,3.5);
  
  fill(19,14,18);
  strokeWeight(0);
  noStroke();
  ellipse(326,465,3.5,3.5);
  
  fill(19,14,18);
  strokeWeight(0);
  noStroke();
  ellipse(331,466,3.5,3.5);
  
  fill(19,14,18);
  strokeWeight(0);
  noStroke();
  ellipse(335,467,3.5,3.5);
  
  //moresmalldesigns
  
  fill(19,14,18);
  stroke(140,147,159);
  strokeWeight(3);
  ellipse(260,413,5,5);
  
  fill(19,14,18);
  strokeWeight(0);
  noStroke();
  ellipse(248,412,6,6);
  
  fill(19,14,18);
  strokeWeight(0);
  noStroke();
  ellipse(252,417,5,5);
  
  fill(140,147,159);
  strokeWeight(0);
  noStroke();
  quad(326,476,336,476,337,483,325,483);
  
  fill(140,147,159);
  strokeWeight(0);
  noStroke();
  quad(331,500,340,498,343,501,332,507); 
  
 fill(19,14,18);
 stroke(19,14,18);
 strokeWeight(1);
 beginShape();
 line(364,533,368,525);
 vertex(368,525);
 
 bezierVertex(380,529,393,531,386,534);
 bezierVertex(373,535,371,534,364,533);
endShape();

//end finally thank you
}


  
  
