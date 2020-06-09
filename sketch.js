const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var gs=1;

function preload() {
}

function setup(){
    var canvas = createCanvas(1360,625);
    engine = Engine.create();
    world = engine.world;

    ball = new Ball (200,100,50,50);
    slingshot = new SlingShot (ball.body,{x:600,y:400});

    b1 = new Block (0,0,150);
    b2 = new Block (502,300,50);
    b3 = new Block (100,100,100);
    b4 = new Block (902,160,30);
    b5 = new Block (300,50,70);
    b6 = new Block (700,200,20);
    b7 = new Block (1100,50,70);
    b8 = new Block (1300,250,20);

    g1 = new Ground (800,250,20,180);
    g2 = new Ground (400,150,250,20);
    g3 = new Ground (200,400,20,200);

}

function draw(){
    background("teal");
    Engine.update(engine); 

    ball.display();
    slingshot.display();

    b1.display();
    b1.loop(b1);
    b2.display();
    b2.loop(b2);
    b3.display();
    b3.loop(b3);
    b4.display();
    b4.loop(b4);
    b5.display();
    b5.loop(b5);
    b6.display();
    b6.loop(b6);
    b7.display();
    b7.loop(b7);
    b8.display();
    b8.loop(b8);

    g1.display();
    g2.display();
    g3.display();

    if(ball.body.position.x>1560 || ball.body.position.x<-100 || ball.body.position.y>825 || ball.body.position.y<-200){
        Matter.Body.setPosition(ball.body,{x:600,y:400});
        slingshot.rejoin(ball.body);
        gs=1;
    }
    textSize(50);
    text("Pull and Launch the Striker to Knock the Blocks out",130,570);

}

function mouseDragged(){
    if(gs===1){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
    }
}

function mouseReleased(){
    slingshot.shoot();
    gs=2
}

