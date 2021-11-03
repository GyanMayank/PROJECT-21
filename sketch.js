
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,bin1,bin2

var ball

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(width/2,670,1200,20)

	bin1 = new Ground(1100,600,20,120)
	bin2 = new Ground(900,600,20,120)

	var ballOptions={
		restitution:0.50,
		friction:0,
		density:1.2

	}
	   
	ball = Bodies.circle(200,650,40,ballOptions)
	World.add(world,ball)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background(0);

  ground.show()
  bin1.show()
  bin2.show()

  ellipse(ball.position.x,ball.position.y,40)
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode==UP_ARROW){

		Matter.Body.applyForce(ball,{x:0,y:0},{x:250,y:-400})

	}
}



