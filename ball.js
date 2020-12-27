class ball{
    constructor(x, y,angle) {
        this.image = loadImage("sprites/ball.png");
        var options = {
            'restitution':0.8,
            'friction':0.8,
            'density':0.8
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options);
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