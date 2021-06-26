class dwarf{
    constructor(x, y, imageAnimate){
        this.position = new Vec2(x, y);
        this.velocity = new Vec2( 1.5, 0.5 );
        this.imageAnimate = imageAnimate;
        this.imageDeltaTime = 0;
        this.pattern = 0;
        this.patternCheck = 0;
        this.particle = [];
        this.particle1 = [];
        this.patternDeltaTime = 0;
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
                this.pattern = floor(random(0,2));
                this.patternCheck = 1;
            }
            this.patternDeltaTime += deltaTime / 1000;
            switch ( this.pattern )
            {
            case 0:
                if(this.patternDeltaTime > 0){
                    this.particle.push( new blueParticle( this.position.x + 20, this.position.y + 55 ));
                    this.patternDeltaTime = 0;
                }
                break;
            case 1:
                if(this.patternDeltaTime > 0.25){
                    this.particle1.push( new blueParticle( this.position.x, this.position.y + 55 ) );
                    this.patternDeltaTime = 0;
                }   
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

    particleDraw(){
        for ( let i = 0; i < this.particle.length; i++ )
        {   
            this.particle[ i ].update();
            this.particle[ i ].draw();

            if(this.particle[ i ].position.y > height){
                this.particle.splice( i , 1 );
            }
        }

        for ( let i = 0; i < this.particle1.length; i++ )
        {   
            this.particle1[ i ].update();
            this.particle1[ i ].draw();

            if(this.particle1[ i ].position.y > height){
                this.particle1.splice( i , 1 );
            }
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