function Particle(loc) {
  this.loc = loc;
  this.acc = new p5.Vector();
  
  this.vel = new p5.Vector(random(-2,2), random(-2,2));
  
  this.lifespan = 300;
  this.t = 0;
}

Particle.prototype = {
  constructor: Particle,
  update : function(particle_no){  
    
    var angle = particle_no/TWO_PI
    
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    
    var radius = sqrt((this.loc.x-particleStartX)*(this.loc.x-particleStartX) + (this.loc.y-particleStartY)*(this.loc.y-particleStartY))
    this.loc.x = particleStartX+radius*cos(angle);
    this.loc.y = particleStartY+radius*sin(angle);
  
    this.lifespan -=2.0;
    
    if(this.lifespan<0)
    {
      this.lifespan = 600;
      this.loc = new p5.Vector(particleStartX, particleStartY);
      this.t = 0;
    }
 
    
  },
  display : function(){
    stroke(0,this.lifespan);
    noStroke();
    fill(random(255), this.lifespan);
    this.t+=0.1;
    
     var x = this.loc.x+noise(this.t);
    var y = this.loc.y+noise(this.t);
    push();
    beginShape();
    vertex(4.75+x, 0.5+y);
    vertex(6.16+x, 2.56+y);
    vertex(8.55+x, 3.26+y);
    vertex(7.03+x, 5.24+y);
    vertex(7.1+x, 7.74+y);
    vertex(4.75+x, 6.9+y);
    vertex(2.4+x, 7.74+y);
    vertex(2.47+x, 5.24+y);
    vertex(0.95+x, 3.26+y);
    vertex(3.34+x, 2.56+y);
    endShape();
    pop();
    
   
 
  }
};

// a collection that will hold our particle objects
var particles = [];
var particleStartX;
var particleStartY;
var totalFrame=0;

function setup(){
  createCanvas(windowWidth,windowHeight);
  
  particleStartX = windowWidth/2;
  particleStartY = windowHeight/2;
}

function mouseClicked() {

  for(var i=0;i<particles.length;i++)
  {
    particles.pop();
    i=0;
  }
  particles.pop();
  totalFrame= 0;
  particleStartX = mouseX;
  particleStartY = mouseY;
  
}


function draw(){
  clear();
  background(0);
  
  for (var i=0; i < particles.length; i++){
    
    particles[i].update(i+1);
    particles[i].display();
    
  }

if(totalFrame<400)
{
 
  particles.push(new Particle(new p5.Vector(particleStartX, particleStartY)));
  totalFrame+=1; 
}

}