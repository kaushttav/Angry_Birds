class slingshot{
    constructor(bodyA,bodyB){
    var options = {
        bodyA:bodyA,
        bodyB:bodyB,
        stiffness : 0.04,
        length : 10
}
this.sling1 = loadImage("sling1.png");
this.sling2 = loadImage("sling2.png");
this.sling3 = loadImage("sling3.png");
this.sling = Constraint.create(options);
World.add(world,this.sling);
}
display(){
    // image(this.sling1,200,20);
    // image(this.sling2,170,20);
    var pointA = this.sling.bodyA.position;
    var pointB = this.sling.bodyB.position;
    line(pointA.x,pointA.y,pointB.x,pointB.y);
}
}