class Block{
  constructor(x,y){

    var options={
      restitution:0.3,
      friction:0.5,
      density:1.2,
    }

    this.body = Bodies.rectangle( x, y, width, height, options);
    this.width = 25;
    this.height = 50;
    World.add(world,this.body);

  }

  display(){
    rectMode(CENTER)
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
  }
}
