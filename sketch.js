const REDDWARF = 'reddwarf'

let gImages = [];

let redDwarf;
let center;

let A;
function preload(){
    gImages[REDDWARF] = loadImage('DwarfImage/RedDwarf1.png');
}

function setup()
{
    createCanvas( 500, windowHeight );
    center = new dwarf(width/2, 100, 0, 0, 2000);
    redDwarf = new dwarf(center.position.x, center.position.y, -HALF_PI, 4, 300);
    A = 0;
}   

function draw()
{
    background( 220 );
    switch(A){
        case 0:
            console.log("0");
            
            break;
        case 1:
            console.log("1");
            break;
    }

    redDwarf.update();
    center.update();
}

function mousePressed(){
    A += 1;
}
