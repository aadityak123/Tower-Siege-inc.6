const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var base1,base2;
var block1;





function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  base1 = new Base(400,300)
  base2 = new Base(650,200)

  block1 = new Block(350,295)


  Engine.run(engine);
}

function draw() {
  background(0);

base1.display();
base2.display();

block1.display();



  drawSprites();
}
