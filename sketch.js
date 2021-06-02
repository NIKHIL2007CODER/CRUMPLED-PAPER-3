
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;


var dustbinObj, paperObject,groundObject	
var world;
var wall1,wall2,wall3;

function setup() {
    var canvas = createCanvas(1364,620)
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(Math.round(random(300,1200)),610);
	paperObject = new paper(200,450,50);
	groundObject=new ground(width/2,620,width,40);
	bin = new Bin(dustbinObj.x,530,140,140);
	//Create a Ground
	 
	wall1 = new walls(1360,height/2,20,650);
    wall2 = new walls(width/2,0,1390,20);
	wall3 = new walls(0,width/2,20,650);

	stand1 = new stand(200,50,20,100);

	launcher = new launcher(paperObject.body,{x:200,y:100});

	

	//var render = Render.create({
	//  element: document.body,
	  //engine: engine,
	//  options: {
	//    width: 1200,
	//    height: 700,
	 //   wireframes: false
	//  }
//	});

	Engine.run(engine);
	//Render.run(render);
    
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(240);
    
  
  
  groundObject.display();
  bin.display();

 paperObject.display();
 launcher.display();
 stand1.display(); 
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    
  	}
}
function mouseDragged(){
	Matter.Body.setPosition(paperObject.body,{x:mouseX,y:mouseY})
	}
	function mouseReleased(){
	launcher.fly()
	}
	




