const Engine=Matter.Engine;
const World=Matter.World ;
const Bodies=Matter.Bodies ; 
var world,engine,bat,ground ;







function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world ;

var options= {
isStatic: false,
restitution: 1.0,

}

var land={
isStatic: true
}


bat=Bodies.rectangle(200,200,10,10,options);
World.add(world,bat);
ground=Bodies.rectangle(0,380,400,10,land);
World.add(world,ground);

 
}

function draw() {
  background("red");  
  Engine.update(engine);
  rect(bat.position.x,bat.position.y,10,10);

  rect(ground.position.x,ground.position.y,400,10);
  

}