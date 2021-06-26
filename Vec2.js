// Name       : Seongmin-Choi
// Assignment : final_project-make_a_game
// Course     : CS099
// Spring 2021

class Vec2
{

    constructor( x = 0, y = 0 )
    {
        this.x = x;
        this.y = y;
    }
    getAngle()
    {
        const angle = atan2( this.y, this.x );
        return angle;
    }
    setAngle( angle_in_radians )
    {
        const length = this.getLength();
        this.x = cos( angle_in_radians ) * length;
        this.y = sin( angle_in_radians ) * length;
    }
    getLength()
    {
        const length = sqrt( this.x * this.x + this.y * this.y );
        return length;
    }
    setLength( length )
    {
        const angle_in_radians = this.getAngle();
        this.x = cos( angle_in_radians ) * length;
        this.y = sin( angle_in_radians ) * length;
    }
    add( vector )
    {
        const New_x = this.x + vector.x;
        const New_y = this.y + vector.y;
        return new Vec2( New_x, New_y );
    }
    addTo( vector )
    {
        this.x += vector.x;
        this.y += vector.y;
    }
    subtract( vector )
    {
        const New_x = this.x - vector.x;
        const New_y = this.y - vector.y;
        return new Vec2( New_x, New_y );
    }
    subtractFrom( vector )
    {
        this.x -= vector.x;
        this.y -= vector.y;
    }
    multiply( scalar )
    {
        const New_x = scalar * this.x;
        const New_y = scalar * this.y;
        return new Vec2( New_x, New_y );
    }
    multiplyBy( scalar )
    {
        this.x *= scalar;
        this.y *= scalar;
    }
    divide( scalar )
    {
        const New_x = this.x / scalar;
        const New_y = this.y / scalar;
        return new Vec2( New_x, New_y );
    }
    divideBy( scalar )
    {
        this.x /= scalar;
        this.y /= scalar;
    }
}
