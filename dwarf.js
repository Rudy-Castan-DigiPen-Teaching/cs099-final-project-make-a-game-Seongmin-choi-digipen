class dwarf{
    constructor(x, y, imageAnimate){
        this.position = new Vec2(x, y);
        this.velocity = new Vec2( 0, 0 );
        this.imageAnimate = imageAnimate;
        this.imageDeltaTime = 0;
    }

    update()
    {
        this.position.addTo( this.velocity );
        this.animateImg();
    }


    draw(image_reference){
        push();
        imageMode(CENTER);
        image(image_reference, this.position.x, this.position.y);
        pop();
    }

    animateImg(){
        this.imageDeltaTime += deltaTime / 1000;
        if(this.imageDeltaTime >= 7){
            image(this.imageAnimate[2], this.position.x, this.position.y);
            this.imageDeltaTime = 0;
        }
        else if(this.imageDeltaTime >= 2 && this.imageDeltaTime <= 7){
            image(this.imageAnimate[2], this.position.x, this.position.y);            
        }
        else if(this.imageDeltaTime >= 1.75 && this.imageDeltaTime <= 2){
            image(this.imageAnimate[1], this.position.x, this.position.y);
        }
        else{
            image(this.imageAnimate[0], this.position.x, this.position.y);
        }
    }


}