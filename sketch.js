const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2;
var ground;
var pig;
var log;
var bird;
var background_image;

var gameState = "onSling";
function preload(){
    background_image = loadImage("bg.png");
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);
    ground = new Ground(600,height,1200,20);
    platform = new Ground(150,305,300,170);
    pig1 = new Pig(810,350);
    pig2 = new Pig(810,220);
    log1 = new Log(810,260,300,PI/2);
    log2 = new Log(810,180,300,PI/2);
    log3 = new Log(760,120,150,PI/7);
    log4 = new Log(870,120,150,-PI/7);
    bird = new Bird(100,100);
    // log5 = new Log(230,180,80,PI/2);
    Slingshot = new slingshot(bird.body,{x:200,y:50});
}

function draw(){
    background(background_image);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    // log5.display();
    bird.display();
    Slingshot.display();
    platform.display();
    // getTime();
}
function mouseDragged(){
    if(gameState !== "launched"){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
    }
}
function mouseReleased(){
    Slingshot.fly();
    gameState = "launched";
}
function keyPressed(){
    if(keyCode === 32){
        // Slingshot.attach(bird.body);
    }
}
async function getTime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    console.log(responseJSON);
}

