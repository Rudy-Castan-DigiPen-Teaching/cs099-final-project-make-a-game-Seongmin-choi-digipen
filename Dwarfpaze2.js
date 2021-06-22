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
        this.particle1 = [];
        this.particle2 = [];
        this.particle3 = [];
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
                this.pattern = floor(3);
                this.patternCheck = 1;
            }   
                switch(this.pattern){                        
                    case 0:
                        for(let i = 0; i < 2; ++i){
                            this.particle.push( new Paze2Particle( this.position.x + 55, this.position.y + 55 ));
                            if ( this.particle[ i ].position.y > height )
                            {
                            this.particle.splice( i, 1 );
                            }   
                        }
                        for(let Paze2Particle of this.particle){
                            Paze2Particle.update();
                            Paze2Particle.draw();
                        }
                        break;
                    case 1:
                        for ( let i = 0; i < 2; ++i )
                        {
                            this.particle1.push( new Paze2Particle1( this.position.x + 55, this.position.y + 55 ) );
                            if ( this.particle1[ i ].position.y > height )
                            {
                                this.particle1.splice( i, 1 );
                            }
                        }
                        for ( let Paze2Particle1 of this.particle1 )
                        {
                            Paze2Particle1.update();
                            Paze2Particle1.draw();
                        }
                        break;
                    case 2:
                        for ( let i = 0; i < 2; ++i )
                        {
                            this.particle2.push( new Paze2Particle2( this.position.x + 55, this.position.y + 55 ) );
                            if ( this.particle2[ i ].position.y > height )
                            {
                                this.particle2.splice( i, 1 );
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
                        for ( let Paze2Particle2 of this.particle2 )
                        {
                            Paze2Particle2.update();
                            Paze2Particle2.draw();
                        }
                        break;
                    case 3:
                        this.particle3.push( new Paze2Particle3( this.position.x + 55, this.position.y + 55 ) );
                        for ( let Paze2Particle3 of this.particle3 )
                        {
                            Paze2Particle3.update();
                            Paze2Particle3.draw();
                        }
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