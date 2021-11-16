const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;

var ground;
var rightWall;
var leftWall;
var topWall;

var ball;

var button1, button2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  //calling the constructor function
  ground = new Ground(200,380,400,20);
  leftWall = new Ground(20,200,20,400);
  rightWall = new Ground(380,200,20,400);
  topWall = new Ground(200,20,400,20);
  
  var ballOptions = {
    restitution: 0.95
  }
  
  ball = Bodies.circle(200,100,20,ballOptions);
  World.add(world,ball);
 
 
  rectMode(CENTER);
  ellipseMode(RADIUS);

  button1 = createImg("right.png");
  button1.position(220,30);
  button1.size(50,50);
  button1.mouseClicked(hForce);
  
  button2 = createImg("up.png");
  button2.position(20,30);
  button2.size(50,50);
  button2.mouseClicked(vForce);
  

}

function draw() 
{
  background(51);
 
  Engine.update(engine);

  //call the show function
  ground.show();
  leftWall.show();
  rightWall.show();
  topWall.show();

  fill("red");
  ellipse(ball.position.x, ball.position.y,20,20);

}

function hForce(){
  Matter.Body.applyForce(ball, {x:0,y:0}, {x:0.05, y:0});
}

function vForce(){
  Matter.Body.applyForce(ball, {x:0,y:0}, {x:0,y:-0.05});
}