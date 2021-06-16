class dwarf{
    constructor(x, y, imageAnimate){
        this.position = new Vec2(x, y);
        this.velocity = new Vec2( 1.5, 0.5 );
        this.imageAnimate = imageAnimate;
        this.imageDeltaTime = 0;
        this.pattern = 0;
        this.patternCheck = 0;
    }

    update()
    {
        this.position.addTo( this.velocity );
        this.animateImg();
        this.judgement();
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
            this.patternCheck = 0;
        }
        else if(this.imageDeltaTime >= 2 && this.imageDeltaTime <= 7){
            image(this.imageAnimate[2], this.position.x, this.position.y);
            if(this.patternCheck == 0){
                this.pattern = floor(random(0,4));
                this.patternCheck = 1;
            }
                switch(this.pattern){
                    case 0:
                        console.log(0);
                        break;
                    case 1:
                        console.log(1);
                        break;
                    case 2:
                        console.log(2);
                        break;
                    case 3:
                        console.log(3);
                        break;
                
            }                        
        }
        else if(this.imageDeltaTime >= 1.75 && this.imageDeltaTime <= 2){
            image(this.imageAnimate[1], this.position.x, this.position.y);
        }
        else{
            image(this.imageAnimate[0], this.position.x, this.position.y);
        }
    }

    judgement(){
        
        if(this.position.x >= width - 40){
            this.velocity = new Vec2( -1.5, 0 );
        }
        else if(this.position.x <= 0){
            this.velocity = new Vec2( 1.5, -1 );
        }
        if(this.position.y <= 0){
            this.velocity = new Vec2( 1.5, 1 );
        }
    }


}