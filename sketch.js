
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinObj, paperObject, groundObject
var dustbinimage
function preload()
{
	dustbinimage = loadImage ("dustbingreen.png")
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	dustbinObj=new dustbin(1200,650);
	//dustbinObj.addImage(dustbinimage)
	paperObject=new paper(200,450,40);
	groundObject=new ground(width/2,670,width,20);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  
  background("lightgreen");



  dustbinObj.display();
  paperObject.display();
  groundObject.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
  
	}
}

