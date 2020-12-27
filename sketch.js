const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var box1, box2, box3, box4, box5, box6,
box7, box8, box9, box10, box11, box12,
box13, box14, box15, box16, box17, box18,
box19, box20, box21, box22, box23, box24,
box25, box26, box27, box28, box29, box30;
var beam1;
var ball1, rope1;
var bg = "sprites/bgsite.png";
var brick = [];

function preload() {
    backgroundImg = loadImage(bg);
}

function setup() {
createCanvas(1200,480);

engine = Engine.create();
world = engine.world;

ground = new Ground(600,480,1200,20);

box1 = new box(600,430);
box2 = new box(600,380);
box3 = new box(600,330);
box4 = new box(600,280);
box5 = new box(600,230);
box6 = new box(550,430);
box7 = new box(550,380);
box8 = new box(550,330);
box9 = new box(550,280);
box10 = new box(550,230);
box11 = new box(650,430);
box12 = new box(650,380);
box13 = new box(650,330);
box14 = new box(650,280);
box15 = new box(650,230);
box16 = new box(700,430);
box17 = new box(700,380);
box18 = new box(700,330);
box19 = new box(700,280);
box20 = new box(700,230);
box21 = new box(750,430);
box22 = new box(750,380);
box23 = new box(750,330);
box24 = new box(750,280);
box25 = new box(750,230);
box26 = new box(800,430);
box27 = new box(800,380);
box28 = new box(800,330);
box29 = new box(800,280);
box30 = new box(800,230);

ball1 = new ball(380,280);
rope1 = new rope(ball1.body,{x:395, y:258});
}

function draw() {
Engine.update(engine)

background(backgroundImg);

ground.display();

box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();
box22.display();
box23.display();
box24.display();
box25.display();
box26.display();
box27.display();
box28.display();
box29.display();
box30.display();

ball1.display();
rope1.display();
}

function mouseDragged() {
    Matter.Body.setPosition(ball1.body,{x:mouseX, y:mouseY})
}

function keyPressed(){
    if(keyCode === 32){
        rope1.fly();
    }
    if(keyCode === 8){
    Matter.Body.setPosition(ball1.body,{x:391, y:258});
    rope1.attach(ball1.body);
    }
}