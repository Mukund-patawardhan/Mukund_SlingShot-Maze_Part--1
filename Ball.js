class Ball {
  constructor(x, y) {
    var options = {
        'restitution':1,
        'friction':1.0,
        'density':3
    }
    this.body = Bodies.polygon(x, y, 8,50, options);
    this.width = 50;
    this.height = 50;
    
    World.add(world, this.body);
  }
  display(){ 
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("green");
    strokeWeight(4);
    stroke("blue");
    rect(0, 0, this.width, this.height);
    pop();
  }
};