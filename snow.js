class snowPrincess {
    constructor(x, y)
    {
        this.position = new Vec2(x, y);
        this.dwarfHp = 3; 
    }

    update(){

    }

    draw(image_reference){
        push();
        imageMode(CENTER);
        image(image_reference, this.position.x, this.position.y);
        pop(); 
    }
}