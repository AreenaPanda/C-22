/*//create a phy engine
const Engine=Matter.Engine;
//create a phy world
const World=Matter.World;
//create the phy grounds
const Bodies=Matter.Bodies;

var engine,world;
var ground;

function setup() {
 var canvas =  createCanvas(400,400);
  
 engine=Engine.create;
 world=engine.world;

 ground=Bodies.rectangle(200,100,50,50);
 World.add(world,ground);
}
*/

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options={
      isStatic:true
    }
    ground = Bodies.rectangle(200,390,200,20,ground_options);

    World.add(world,ground);
console.log(ground);
console.log(ground.position.x);
console.log(ground.position.y);
var ball_options={
  restitution:0.2
}
 ball=Bodies.circle(200,100,20,ball_options);
World.add(world,ball);


    
}
function draw() {
  background(0); 
 text(mouseX+ ","+mouseY,mouseX,mouseY);
Engine.update(engine);
fill("yellow");
  rectMode(CENTER); 
 rect(ground.position.x,ground.position.y,400,20);

 ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y,20,20);
}