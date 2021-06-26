class snowPrincess
{
    constructor( x, y, imageAnimate )
    {
        this.position = new Vec2( x, y );
        this.princessHp = 3;
        this.imageAnimate = imageAnimate;
        this.Shoot = [];
        this.bulletTime = 0;
        this.isHit = false;
        this.hitBoxR = 20;
    }

    update()
    {
        this.control();
        this.bullet();
        this.movement();
        this.hitBox();
    }

    draw( image_reference )
    {
        push();
        imageMode( CENTER );
        image( image_reference, this.position.x, this.position.y );
        pop();
    }

    control()
    {
        if ( keyIsDown( LEFT_ARROW ) )
        {
            this.position.x -= 2.5;
        }

        if ( keyIsDown( RIGHT_ARROW ) )
        {
            this.position.x += 2.5;
        }

        if ( keyIsDown( UP_ARROW ) )
        {
            this.position.y -= 2.5;
        }

        if ( keyIsDown( DOWN_ARROW ) )
        {
            this.position.y += 2.5;
        }
    }

    bullet()
    {
        for ( let i = 0; i < this.Shoot.length; i++ )
        {
            this.Shoot[ i ].update();
            this.Shoot[ i ].draw();
            if ( this.Shoot[ i ].position.y < 0 )
            {
                this.Shoot.splice( i, 1 );
            }
        }
        if ( keyIsDown( 32 ) )
        {
            this.Shoot.push( new snowParticle( this.position.x, this.position.y ) );
        }
    }

    movement()
    {

        if ( this.position.x < 0 )
        {
            this.position.x = 0;
        }
        else if ( this.position.x > width )
        {
            this.position.x = width;
        }
        if ( this.position.y < 0 )
        {
            this.position.y = 0
        }
        else if(this.position.y > height)
        {
            this.position.y = height
        }
    }

    hitBox(){
        circle(this.position.x, this.position.y, this.hitBoxR);
    }

}

