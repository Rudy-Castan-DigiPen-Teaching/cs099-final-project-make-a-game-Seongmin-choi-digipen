class Bluedwarf
{
    constructor( x, y, imageAnimate )
    {
        this.position = new Vec2( x, y );
        this.velocity = new Vec2( -1.5, 0.5 );
        this.imageAnimate = imageAnimate;
        this.imageDeltaTime = 0;
        this.pattern = 0;
        this.patternCheck = 0;
        this.dwarfHp = 7000;
        this.particle = [];
        this.particle1 = [];
        this.isHit = false;
    }

    update()
    {
        this.position.addTo( this.velocity );
        this.animateImg();
        this.judgement();
    }


    draw( image_reference )
    {
        push();
        imageMode( CENTER );
        image( image_reference, this.position.x, this.position.y );
        pop();
    }

    animateImg()
    {

        this.imageDeltaTime += deltaTime / 1000;
        if ( this.imageDeltaTime >= 10 )
        {
            image( this.imageAnimate[ 2 ], this.position.x, this.position.y );
            this.imageDeltaTime = 0;
            this.patternCheck = 0;
        }
        else if ( this.imageDeltaTime >= 6 && this.imageDeltaTime <= 10 )
        {
            image( this.imageAnimate[ 2 ], this.position.x, this.position.y );
            if ( this.patternCheck == 0 )
            {
                this.pattern = floor( random( 0,2 ) );
                this.patternCheck = 1;
            }
            switch ( this.pattern )
            {
            case 0:
                for ( let i = 0; i < 1; ++i )
                {
                    this.particle.push( new blueParticle( this.position.x + 10, this.position.y + 20 ) );
                    if ( this.particle[ i ].position.y > height )
                    {
                        this.particle.splice( i, 1 );
                    }
                }
                for ( let blueParticle of this.particle )
                {
                    blueParticle.update();
                    blueParticle.draw();
                }
                break;
            case 1:
                for ( let i = 0; i < 1; ++i )
                {
                    this.particle1.push( new blueParticle1( this.position.x + 10, this.position.y + 20 ) );
                    if ( this.particle1[ i ].position.y > height )
                    {
                        this.particle1.splice( i, 3 );
                    }
                }
                for ( let blueParticle1 of this.particle1 )
                {
                    blueParticle1.update();
                    blueParticle1.draw();
                }
                break;
            }
        }
        else if ( this.imageDeltaTime >= 5.75 && this.imageDeltaTime <= 6 )
        {
            image( this.imageAnimate[ 1 ], this.position.x, this.position.y );
        }
        else
        {
            image( this.imageAnimate[ 0 ], this.position.x, this.position.y );
        }

    }

    judgement()
    {

        if ( this.position.x >= width - 40 )
        {
            this.velocity = new Vec2( -1.5, 0 );
        }
        else if ( this.position.x <= 0 )
        {
            this.velocity = new Vec2( 1.5, -1 );
        }
        if ( this.position.y <= 0 )
        {
            this.velocity = new Vec2( 1.5, 1 );
        }
    }
}
