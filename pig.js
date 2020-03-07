class Pig extends BaseClass{
    constructor(x,y){
        super(x,y,50,50);
        this.image = loadImage("enemy.png");
        this.Visibility = 255;
    }

    display(){
        // console.log(this.body.speed);
        if(this.body.speed <3){
            super.display();
        }
        else{
            World.remove(world,this.body);
            push();
            this.visibility = this.visibility - 5;
            tint(255,this.Visibility);
            this.image(this.image,this.body.poisition.x,this.body.position.y,50,50);
            pop();

        }
    }
};