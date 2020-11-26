const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world,ground,box1,box2;

function setup() {
  createCanvas(400,400);
  
  engine=Engine.create();
  world=engine.world;

  ground= new Ground(200,100,210,20); 
  
  bob1= new Bob(120,330);
  bob2= new Bob(160,330);
  bob3= new Bob(200,330);
  bob4= new Bob(240,330);
  bob5= new Bob(280,330);

  chain1 = new Chain(bob1.body,{x:120,y:100});
  chain2 = new Chain(bob2.body,{x:160,y:100});
  chain3 = new Chain(bob3.body,{x:200,y:100});
  chain4 = new Chain(bob4.body,{x:240,y:100});
  chain5 = new Chain(bob5.body,{x:280,y:100});


}

function draw() {
  background(200);

  Engine.update(engine);

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  

  ground.display();
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  
  fill("red")
  text (mouseX+","+mouseY,mouseX,mouseY);
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-85,y:85});
  }
}





