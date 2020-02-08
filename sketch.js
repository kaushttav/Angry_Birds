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
function preload(){
    background_image = loadImage("sprites/bg.png");
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(780,300,60,60);
    box2 = new Box(960,300,60,60);
    box3 = new Box(780,150,60,60);
    box4 = new Box(960,150,60,60);
    box5 = new Box(840,50,60,60);
    ground = new Ground(600,390,1200,20);
    pig1 = new Pig(870,300);
    pig2 = new Pig(870,150);
    log1 = new Log(870,230,320,PI/2);
    log2 = new Log(870,100,320,PI/2);
    log3 = new Log(832,60,120,PI/7);
    log4 = new Log(875,60,120,-PI/7);
    bird = new Bird(100,100);
    log5 = new Log(230,180,80,PI/2);
    Slingshot = new slingshot(bird.body,log5.body);
}

function draw(){
    background(background_image);
    Engine.update(engine);
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
    log5.display();
    bird.display();
    Slingshot.display();
}