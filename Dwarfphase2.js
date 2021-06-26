class dwarfPhase2{
    constructor(x, y, imageAnimate){
        this.position = new Vec2(x, y);
        this.velocity = new Vec2( -1, 0.25 );
        this.imageAnimate = imageAnimate;
        this.imageDeltaTime = 0;
        this.pattern = 0;
        this.patternCheck = 0;
        this.dwarfHp = 5000; 
        this.particle = [];
        this.particle1 = [];
        this.particle2 = [];
        this.particle3 = [];
        this.patternDeltaTime = 0;
        this.isHit = false;
        this.hitBoxR = 45;
    }

    update()
    {
        this.position.addTo( this.velocity );
        this.animateImg();
        this.collision();
        this.hitBox();
    }


    draw(image_reference){
        push();
        imageMode(CENTER);
        image(image_reference, this.position.x, this.position.y);
        pop();
    }

    animateImg(){
        this.imageDeltaTime += deltaTime / 1000;
        if(this.imageDeltaTime >= 8){
            image(this.imageAnimate[2], this.position.x, this.position.y);
            this.imageDeltaTime = 0;
            this.patternDeltaTime = 0;
            this.patternCheck = 0;
        }
        else if(this.imageDeltaTime >= 4 && this.imageDeltaTime <= 8){
            image(this.imageAnimate[2], this.position.x, this.position.y);
            if(this.patternCheck == 0){
                this.pattern = floor(random(0, 4));
                this.patternCheck = 1;
            }   
                this.patternDeltaTime += deltaTime / 1000;
                switch(this.pattern){                        
                    case 0:
                        if(this.patternDeltaTime > 0){
                            this.particle.push( new Phase2Particle( this.position.x + 55, this.position.y + 55 ));
                            this.patternDeltaTime = 0;
                        }
                        break;
                    case 1:
                        if(this.patternDeltaTime > 0.25){
                            this.particle1.push( new Phase2Particle1( this.position.x + 55, this.position.y + 55 ) );
                            this.particle1.push( new Phase2Particle1( this.position.x + 75, this.position.y + 35 ) );
                            this.particle1.push( new Phase2Particle1( this.position.x + 35, this.position.y + 35 ) );
                            this.particle1.push( new Phase2Particle1( this.position.x + 15, this.position.y + 15 ) );
                            this.particle1.push( new Phase2Particle1( this.position.x + 95, this.position.y + 15 ) );
                            this.particle1.push( new Phase2Particle1( this.position.x + 115, this.position.y + 15 ) );
                            this.particle1.push( new Phase2Particle1( this.position.x - 5, this.position.y + 15 ) );
                            this.particle1.push( new Phase2Particle1( this.position.x + 135, this.position.y + 15 ) );
                            this.particle1.push( new Phase2Particle1( this.position.x - 25, this.position.y + 15 ) );
                            this.patternDeltaTime = 0;
                        }   
                        break;
                    case 2:
                        if(this.patternDeltaTime > 0){
                            this.particle2.push( new Phase2Particle2( this.position.y + 55 ) );
                            this.patternDeltaTime = 0;
                        }
                        break;
            }            
        }
        else if(this.imageDeltaTime >= 3.75 && this.imageDeltaTime <= 4){
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

        for ( let i = 0; i < this.particle2.length; i++ )
        {
            this.particle2[ i ].update();
            this.particle2[ i ].draw();

            if(this.particle2[ i ].position.y > height){
                this.particle2.splice( i , 1 );
            }
            else if(this.particle2[ i ].position.x > width )
            {
                this.particle2.splice( i, 1 );
            }
            else if(this.particle2[ i ].position.x < 0 )
            {
                this.particle2.splice( i, 1 );
            }
        }
     }
    collision(){
        
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

    hitBox(){
        push()
        noStroke();
        noFill();
        circle(this.position.x + 40, this.position.y + 35, this.hitBoxR);
        pop()
    }
}