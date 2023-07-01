const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;

var btn1;
var bnt2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
bnt1=createImg("right.png");
bnt1.position(220,30);
  bnt1.size(50,50);
  bnt1.mouseclicked(hForce);

  bnt2=createImg("up.png");
bnt2.position(20,30);
  bnt2.size(50,50);
  bnt2.mouseclicked(vForce);



  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 var ball_opitions = {
  restitution:0.95
 }
 ball= bodies.circle(200,100,20,ball_opitions);
 world.add(word,ball);
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  
  background(51);
  ellipse(ball.position.x,ball_opitions.y,20);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
}
