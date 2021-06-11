class dwarf{
    constructor(x, y, dir, speed, mass = 1){
        this.position = new Vec2(x, y);
        this.velocity = new Vec2( 1, 0 );
        this.velocity.setLength(speed);
        this.velocity.setAngle(dir);
        this.mass = mass;
    }

    update()
    {
        this.position.addTo( this.velocity );
    }

    angleTo(otherParticle)
    {
        const dx = otherParticle.position.x - this.position.x;
        const dy = otherParticle.position.y - this.position.y;
        return atan2(dy, dx);
    }

    distanceTo(otherParticle)
    {
        const dx = otherParticle.position.x - this.position.x;
        const dy = otherParticle.position.y - this.position.y;
        return sqrt(dx * dx + dy * dy);
    }

    gravitateTo(otherParticle)
    {
        const distance = this.distanceTo(otherParticle);
        let grav = new Vec2(1, 0);

        grav.setLength(otherParticle.mass / (distance * distance));
        grav.setAngle(this.angleTo(otherParticle));
        this.velocity.addTo(grav);
    }
    
    draw(image_reference){
        push();
        imageMode(CENTER);
        image(image_reference, this.position.x, this.position.y);
        pop();
    }
}