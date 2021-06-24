class blueParticle
{
    constructor( x, y )
    {
        this.position = new Vec2( x, y );
        this.velocity = new Vec2( 0, -2 );
        this.velocity.setLength( 30 );
        this.velocity.setAngle( HALF_PI );
        this.isHit = false;
        this.hitBoxR = 15
    }

    update()
    {
        this.position.addTo( this.velocity );
    }

    draw()
    {
        circle( this.position.x, this.position.y, this.hitBoxR );
    }
}

class blueParticle1
{
    constructor( x, y )
    {
        this.position = new Vec2( x, y );
        this.velocity = new Vec2( 0, -0.5 );
        this.velocity.setLength( 50 );
        this.velocity.setAngle( HALF_PI );
        this.isHit = false;
        this.hitBoxR = 15
    }

    update()
    {
        this.position.addTo( this.velocity );
    }

    draw()
    {
        circle( this.position.x, this.position.y, this.hitBoxR );
        circle( this.position.x - 20, this.position.y - 20, this.hitBoxR );
        circle( this.position.x - 40, this.position.y - 40, this.hitBoxR );
        circle( this.position.x + 20, this.position.y - 20, this.hitBoxR );
        circle( this.position.x + 40, this.position.y - 40, this.hitBoxR );

    }
}

class Phase2Particle
{
    constructor( x, y )
    {
        this.position = new Vec2( x, y );
        this.velocity = new Vec2( 0, -2 );
        this.velocity.setLength( 30 );
        this.velocity.setAngle( HALF_PI );
        this.isHit = false;
        this.hitBoxR = 60
    }

    update()
    {
        this.position.addTo( this.velocity );
    }

    draw()
    {
        circle( this.position.x, this.position.y, this.hitBoxR );
    }
}

class Phase2Particle1{

    constructor( x, y )
    {
        this.position = new Vec2( x, y );
        this.velocity = new Vec2( 0, -1 );
        this.velocity.setLength( 20 );
        this.velocity.setAngle( HALF_PI );
        this.hitBoxR = 15;
        this.isHit = false;
    }

    update()
    {
        this.position.addTo( this.velocity );
    }

    draw()
    {
        circle( this.position.x, this.position.y, this.hitBoxR );
        circle( this.position.x - 20, this.position.y - 20, this.hitBoxR );
        circle( this.position.x - 40, this.position.y - 40, this.hitBoxR );
        circle( this.position.x + 20, this.position.y - 20, this.hitBoxR );
        circle( this.position.x + 40, this.position.y - 40, this.hitBoxR );
        circle( this.position.x + 60, this.position.y - 60, this.hitBoxR );
        circle( this.position.x - 60, this.position.y - 60, this.hitBoxR );
        circle( this.position.x + 80, this.position.y - 60, this.hitBoxR );
        circle( this.position.x - 80, this.position.y - 60, this.hitBoxR );
    } 
}

class Phase2Particle2
{
    constructor( x, y )
    {
        this.position = new Vec2( x, y );
        this.x = random(0, 550);
        this.velocity = new Vec2( 0.5, 0 );
        this.velocity.setLength( 4 );
        this.velocity.setAngle( HALF_PI );
        this.hitBoxR = 15;
        this.isHit = false;
    }

    update()
    {
        this.position.addTo( this.velocity );
    }

    draw()
    {
        circle( this.x, this.position.y, this.hitBoxR );
    }

}

class Phase2Particle3
{
    constructor( x, y )
    {
        this.position = new Vec2( x, y );
        this.velocity = new Vec2( 0, -0.001 );
        this.velocity.setLength( 30 );
        this.velocity.setAngle( HALF_PI );
        this.hitBoxR1 = 20;
        this.hitBoxR2 = 500;
        this.isHit = false;
    }

    update()
    {   
        this.position.addTo( this.velocity );
        this.boom();
    }

    draw()
    {
        circle( this.position.x, this.position.y, this.hitBoxR1 );
    }

    boom(){
        if(this.position.y > height){
            circle(this.position.x, windowHeight, this.hitBoxR2);
        }
    }
}
