class Block {
  constructor(x, y,width) {
    var options = {
        restitution:0.8,
        friction:1.0,
        density:0.5,
        gravity:1000000000.0
    }
    this.body = Bodies.rectangle(x, y, width, 70, options);
    this.width = width;
    this.height = 20;
    var colours=['red','blue','green','pink','purple','brown','black','teal','magenta','orange','peachpuff','grey','violet','turquoise','coral','olive'];
    this.colour = random(colours);
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(this.colour);
    strokeWeight(4);
    stroke(this.colour);
    rect(0, 0, this.width, 20);
    pop();
  }
  loop(l){
    Matter.Body.setMass(l.body,0.1);
  if(l.body.position.x>1450 || l.body.position.y<-50 ){
    Matter.Body.setPosition(l.body,{x:-100,y:random(0,200)});
    angleMode(DEGREES)
    Matter.Body.setAngle(l.body,random(90,180));
    var colours=['red','blue','green','pink','purple','brown','black','teal','magenta','orange','peachpuff','grey','violet','turquoise','coral','olive'];
    this.colour = random(colours);
  }else{
    if(frameCount%2==0){
    Matter.Body.setVelocity(l.body,{x:random(1,7),y:random(-3,3)});
    }
  }
}
};
