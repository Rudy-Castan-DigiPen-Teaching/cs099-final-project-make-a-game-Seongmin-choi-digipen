
let redDwarf;
let redDwarfImg = [];
let blueDwarf;
let blueDwarfImg = [];
let center;
let snowImg = [];
let snowprincess;
let titleImg = [];
let title

let screen;
var check = 0;
let mouse_screen = 0;
function preload(){
    redDwarfImg.push(loadImage('DwarfImage/RedDwarf1.png'));
    redDwarfImg.push(loadImage('DwarfImage/RedDwarf2.png'));
    redDwarfImg.push(loadImage('DwarfImage/RedDwarf3.png'));
    blueDwarfImg.push(loadImage('DwarfImage/BlueDwarf1.png'));
    blueDwarfImg.push(loadImage('DwarfImage/BlueDwarf2.png'));
    blueDwarfImg.push(loadImage('DwarfImage/BlueDwarf3.png'));
    snowImg.push(loadImage('DwarfImage/Whiteprincess.png'));
    titleImg.push(loadImage('DwarfImage/Title.png'));
}

function setup()
{
    createCanvas( 600, windowHeight );
    redDwarf = new dwarf(width/2, 150, redDwarfImg);
    blueDwarf = new Bluedwarf(width/2 - 80, 150, blueDwarfImg);
    snowprincess = new snowPrincess(width/2, height - 100, snowImg);
    title = new Title(width/2, 200, titleImg);
    screen = 0;
}   

function draw()
{
    background( 220 );
    switch(screen){
        case 0:
            title.draw(titleImg[0]);
            rectMode(CENTER);
            rect(width/2, height/2 + 130, 300, 50);
            rect(width/2, height/2 + 200, 300, 50);
            check = 1;
            if(mouse_screen == 2){
                mouse_screen = 0;
                screen = 1;
            }
            else if(mouse_screen == 1){
                mouse_screen = 0;
                screen = 2;
                check = 0;
            }
            break;
        //크레딧
        case 1:
            console.log("1");
            break;
        //게임 시작
        case 2:
            console.log("2");
            break;
        //게임 스토리 3~5
        case 3:
            check = 1;
            redDwarf.update();
            blueDwarf.update();
            snowprincess.update();
            snowprincess.draw(snowImg[0]);
            break;
        case 4:

            break;
        case 5:
            
            break;
    }

}

function mousePressed(){
    if(check == 0){
    screen += 1;
    }
    if(mouseX > width/2 - 150 && mouseY > height/2 + 105 && mouseX < width/2 + 150 && mouseY < height /2 + 155 && check == 1){
        mouse_screen = 1;
    }
    else if(mouseX > width/2 - 150 && mouseY > height/2 + 175 && mouseX < width/2 + 150 && mouseY < height /2 + 225 && check == 1){
        mouse_screen = 2;
    }
}
