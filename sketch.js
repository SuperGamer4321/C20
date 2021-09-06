
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let myEngine;
let myWorld;

var ground,wedge;
var angle,ball;
function setup()
{
  createCanvas(400,400);
  myEngine = Engine.create(); //1
  myWorld = myEngine.world; //2
  
  var static_options = {
    isStatic : true 

  };
  ground = Bodies.rectangle(200,390,400,20,static_options);
  console.log(ground);
  World.add(myWorld,ground);
  
  wedge = Bodies.rectangle(200,200,125,10,static_options);
  World.add(myWorld,wedge);

  angle = 45;
  
  ball = Bodies.circle(150,10,15);
  World.add(myWorld,ball);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  //4 ===> Bodies
  //5 ===> Adding into world
}

function draw() 
{
  background(51);

  Matter.Body.setAngle(wedge,angle)
 Engine.update(myEngine); //3
 //6===> displaying using rect or circle
  rect(ground.position.x , ground.position.y,400,20);
  angle += 0.1
  
  push();
  translate(wedge.position.x,wedge.position.y)//shift the origin
  rotate(angle);
  rect(0,0,125,10);
  pop();
  
  ellipse(ball.position.x,ball.position.y,15,15);
}

