
let BackGround = [];
const BACKGROUND = 'background';
let redDwarf;
let redDwarfImg = [];
let blueDwarf;
let blueDwarfImg = [];
let dwarfPhase;
let dwarfPhaseImg = [];
let center;
let snowImg = [];
let snowprincess;
let titleImg = [];
let title;
let mainMusic;
let Phase1Music;
let Phase2Music;


let screen;
var check = 0;
let mouse_screen = 0;
function preload(){
    BackGround[BACKGROUND] = loadImage('asset/background.png');
    mainMusic = loadSound('asset/LEGACY - Thoughts MP3.mp3');
    Phase1Music = loadSound('asset/LEGACY - Heated Lands MP3.mp3');
    Phase2Music = loadSound('asset/LEGACY - A Slave To No One MP3.mp3');
    redDwarfImg.push(loadImage('asset/RedDwarf1.png'));
    redDwarfImg.push(loadImage('asset/RedDwarf2.png'));
    redDwarfImg.push(loadImage('asset/RedDwarf3.png'));
    blueDwarfImg.push(loadImage('asset/BlueDwarf1.png'));
    blueDwarfImg.push(loadImage('asset/BlueDwarf2.png'));
    blueDwarfImg.push(loadImage('asset/BlueDwarf3.png'));
    dwarfPhaseImg.push(loadImage('asset/Paze2BlueDwarf1.png'));
    dwarfPhaseImg.push(loadImage('asset/Paze2BlueDwarf2.png'));
    dwarfPhaseImg.push(loadImage('asset/Paze2BlueDwarf3.png'));
    snowImg.push(loadImage('asset/Whiteprincess.png'));
    titleImg.push(loadImage('asset/Title.png'));
}

function setup()
{   
    createCanvas( 600, windowHeight );
    redDwarf = new dwarf(width/2, 150, redDwarfImg);
    blueDwarf = new Bluedwarf(width/2 - 80, 150, blueDwarfImg);
    snowprincess = new snowPrincess(width/2, height - 100, snowImg);
    dwarfPhase = new dwarfPhase2(width/2 - 80, 150, dwarfPhaseImg);
    title = new Title(width/2, 200, titleImg);
    screen = 3;
}   

function draw()
{
    background( BackGround[BACKGROUND] );
    switch(screen){
        case 0:
            if(!mainMusic.isPlaying())
            {
                mainMusic.play();
                mainMusic.setVolume(0.5);
            }
            title.draw(titleImg[0]);
            rectMode(CENTER);
            rect(width/2, height/2 + 130, 300, 50);
            rect(width/2, height/2 + 200, 300, 50);
            textSize(20);
            textStyle(BOLD);
            text("START && How to Play", width/2 - 110, height/2 + 135);
            text("CREDITS", width/2 - 40, height/2 + 205);
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
            if(!Phase1Music.isPlaying())
            {
                Phase1Music.play();
                Phase1Music.setVolume(0.25);
            }
            redDwarf.update();
            redDwarf.particleDraw()
            blueDwarf.update();
            blueDwarf.particleDraw();
            snowprincess.update();
            snowprincess.draw(snowImg[0]);
            for ( let i = 0; i < snowprincess.Shoot.length; i++ )
            {
            let d = dist(snowprincess.Shoot[i].position.x, snowprincess.Shoot[i].position.y, blueDwarf.position.x, blueDwarf.position.y);

            if( d <= snowprincess.Shoot[i].hitBoxR + blueDwarf.hitBoxR){
                snowprincess.Shoot[i].isHit = true;
                blueDwarf.isHit = true;
                if(snowprincess.Shoot[i].isHit == true && blueDwarf.isHit == true)
                {
                    blueDwarf.dwarfHp = blueDwarf.dwarfHp - 2;
                }    
            }

            if(blueDwarf.dwarfHp == 0){
                screen = 4;
                Phase1Music.pause();
            }

            for ( let i = 0; i < blueDwarf.particle.length; i++ )
            {
            let d = dist(blueDwarf.particle[i].position.x, blueDwarf.particle[i].position.y, snowprincess.position.x, snowprincess.position.y);

            if( d <= blueDwarf.particle[i].hitBoxR + snowprincess.hitBoxR){
                blueDwarf.particle[i].isHit = true;
                snowprincess.isHit = true;
                if(blueDwarf.particle[i].isHit == true && snowprincess.isHit == true)
                {
                    snowprincess.princessHp = snowprincess.princessHp - 1;
                }
            }
            
        }
    }
            break;
        case 4:
            check = 1;
            if(!Phase2Music.isPlaying())
            {
                Phase2Music.play();
                Phase2Music.setVolume(0.3);
            }
            dwarfPhase.update();
            dwarfPhase.particleDraw();
            snowprincess.update();
            snowprincess.draw(snowImg[0]);
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
