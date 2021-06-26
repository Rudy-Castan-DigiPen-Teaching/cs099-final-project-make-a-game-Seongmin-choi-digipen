// Name       : Seongmin-Choi
// Assignment : final_project-make_a_game
// Course     : CS099
// Spring 2021

class Title
{
    constructor( x, y, imageAnimate )
    {
        this.position = new Vec2( x, y );
        this.imageAnimate = imageAnimate;
    }


    update()
    {

    }

    draw( image_reference )
    {
        push();
        imageMode( CENTER );
        image( image_reference, this.position.x, this.position.y );
        pop();
    }
}
