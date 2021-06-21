class dwarfPaze2{
    constructor(x, y, imageAnimate){
        this.position = new Vec2(x, y);
        this.velocity = new Vec2( -1, 0.25 );
        this.imageAnimate = imageAnimate;
        this.imageDeltaTime = 0;
        this.pattern = 0;
        this.patternCheck = 0;
        this.dwarfHp = 3500; 
        this.particle = [];
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
        if(this.imageDeltaTime >= 6){
            image(this.imageAnimate[2], this.position.x, this.position.y);
            this.imageDeltaTime = 0;
            this.patternCheck = 0;
        }
        else if(this.imageDeltaTime >= 1.5 && this.imageDeltaTime <= 6){
            image(this.imageAnimate[2], this.position.x, this.position.y);
            if(this.patternCheck == 0){
                this.pattern = floor(random(0));
                this.patternCheck = 1;
            }   
                switch(this.pattern){                        
                    case 0:

                        for(let i = 0; i < 20; ++i){
                            this.particle.push( new blueParticle( this.position.x, this.position.y ));
                            if ( this.particle[ i ].position.y > height )
                            {
                            this.particle.splice( i, 1 );
                            }   
                        }
                        for(let blueParticle of this.particle){
                            blueParticle.update();
                            blueParticle.draw();
                        }
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
        else if(this.imageDeltaTime >= 1.25 && this.imageDeltaTime <= 1.5){
            image(this.imageAnimate[1], this.position.x, this.position.y);
        }
        else{
            image(this.imageAnimate[0], this.position.x, this.position.y);
        }
    }

    judgement(){
        
        if(this.position.x >= width - 40){
            this.velocity = new Vec2( -1, 0 );
        }
        else if(this.position.x <= 0){
            this.velocity = new Vec2( 1, -0.5 );
        }
        if(this.position.y <= 0){
            this.velocity = new Vec2( 1, 0.5 );
        }
    }
}