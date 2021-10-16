
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3, bob4,bob5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world,back;
var roof2

function preload(){
back=loadImage("cartoonbrokencity.jpg")



}

function setup() {
	createCanvas(windowWidth,windowHeight);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(500,200,50,30);


	bob1 = new bob(300,550,80)
block1=new block(700,800,100,50,false)
block21=new block(700,700,100,50,false)
block31=new block(700,600,100,50,false)
block4=new block(700,500,100,50,false)
block5=new block(700,400,100,50,false)
block6=new block(700,300,100,50,false)
block7=new block(700,200,100,50,false)
block8=new block(700,100,100,50,false)
ground=new block(900,750,2500,30,true)

block9=new block2(900,800,100,50,false)
block10=new block2(900,700,100,50,false)
block11=new block2(900,600,100,50,false)
block12=new block2(900,500,100,50,false)
block13=new block2(900,400,100,50,false)
block14=new block2(900,300,100,50,false)
block15=new block2(900,200,100,50,false)
block16=new block2(900,100,100,50,false)


block20=new block3(800,50,300,50,false)
	
	rope1=new rope(bob1.body,roofObject.body,-0)

	
	
	
	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background(back);
  roofObject.display();

  textFont("Algerian")
textSize(40)
fill("red")
  text("press up arrow to play",width/1.8,height/10)


  rope1.display();
 

  bob1.display();
 block1.display()
 block21.display()

 block31.display()

 block4.display()

 block5.display()
 block6.display()
 block7.display()
 block8.display()

 fill("brown")
 ground.display()

 block9.display()
 block10.display()

 block11.display()

 block12.display()

 block13.display()
 block14.display()
 block15.display()
 block16.display()


 block20.display()

}




 function keyPressed() {
 	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-70,y:-55});
 	}

	 
 }
