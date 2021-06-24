class snowParticle
{

    constructor( x, y )
    {
        this.position = new Vec2( x, y );
        this.velocity = new Vec2( 0, 2 );
        this.velocity.setLength( 15 );
        this.velocity.setAngle( HALF_PI + PI );
        this.isHit = false;
        this.hitBoxR = 15;
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