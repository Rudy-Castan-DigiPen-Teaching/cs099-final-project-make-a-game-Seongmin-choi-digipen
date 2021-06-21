class blueParticle
{

    constructor( x, y )
    {
        this.position = new Vec2( x, y );
        this.velocity = new Vec2( 0, 0.5 );
        this.gravity = new Vec2( 0, 1 );
        this.velocity.setLength( 5 );
        this.velocity.setAngle( HALF_PI );
    }

    update()
    {
        this.position.addTo( this.velocity );
        this.velocity.addTo(this.gravity);
        console.log('B')
    }

    draw()
    {
        circle( this.position.x, this.position.y, 15 );
    }
}