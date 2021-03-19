const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var platform,ground;
var polygon;
var box1,box2,box3,box4,box5,box6,box7,box8;
var slingshot;



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  ground = new Ground(600,height,1200,20);
  platform = new Ground (150, 305, 300, 170);
  box1=new box(130,235,30,40);
  box2=new box(160,235,30,40);
  box3=new box(190,235,30,40);
  box4=new box(220,235,30,40); 
  box5=new box(250,235,30,40); 
  box6=new box(280,235,30,40); 
  box7=new box(310,235,30,40);
  //new level 
  box8=new box(340,235,30,40);
  polygon=Bodies.circle(50,200,20);
  slingshot=new SlingShot(this.polygon,{x:100,y:200});
}

function draw() {
  background(255,255,255); 
  Engine.update(engine);

  box1.display();
  box2.display();  
  box3.display(); 
  box4.display();   
  box5.display();   
  box6.display();   
  box7.display();   
  box8.display();
  polygon.display();
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if(keyCode === 32){
   slingshot.attach(bird.body);
  }
}

