class snowPrincess {
    constructor(x, y, imageAnimate)
    {
        this.position = new Vec2(x, y);
        this.princessHp = 3; 
        this.imageAnimate = imageAnimate;
        this.Shoot = [];
        this.bulletTime = 0;
    }

    update(){
        this.control();
        this.bullet();
    }

    draw(image_reference){
        push();
        imageMode(CENTER);
        image(image_reference, this.position.x, this.position.y);
        pop(); 
    }

    control(){
        if(keyIsDown(LEFT_ARROW)) {
            this.position.x -= 2.5;
        }
        
        if(keyIsDown(RIGHT_ARROW)) {
            this.position.x += 2.5;
        }
        
        if(keyIsDown(UP_ARROW)) {
            this.position.y -= 2.5;
        }
        
        if(keyIsDown(DOWN_ARROW)) {
            this.position.y += 2.5;
        }
    }

    bullet(){
        for(let i = 0; i < this.Shoot.length; i++){
            this.Shoot[i].update();
            this.Shoot[i].draw();
            if(this.Shoot[i].position.y < 0){
                this.Shoot.splice(i, 1);
            }
        }
        if(keyIsDown(32)){
            this.Shoot.push(new snowParticle(this.position.x, this.position.y));
        }
        console.log(this.Shoot.length);
    }
}