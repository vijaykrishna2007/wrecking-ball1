class box{
    constructor(x, y) {
        var options = {
            'restitution':0.5,
            'friction':0.5,
            'density':0.5
        }
        this.image = loadImage("sprites/brick.png");
        this.body = Bodies.rectangle(x, y, 50, 18, options);
        this.width = 50;
        this.height = 50;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0, 0, this.width, this.height);
        pop();
      }
}