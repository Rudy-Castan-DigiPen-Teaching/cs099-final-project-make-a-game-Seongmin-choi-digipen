// Name       : Seongmin-Choi
// Assignment : final_project-make_a_game
// Course     : CS099
// Spring 2021

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
let appleImg = [];
let titleImg = [];
let title;
let mainMusic;
let Phase1Music;
let Phase2Music;
let WinMusic;
let fontDeltaTime = 0;


let screen;
var check = 0;
let mouse_screen = 0;

function preload()
{
    BackGround[ BACKGROUND ] = loadImage( 'asset/background.png' );
    mainMusic = loadSound( 'asset/LEGACY - Thoughts MP3.mp3' );
    Phase1Music = loadSound( 'asset/LEGACY - Heated Lands MP3.mp3' );
    Phase2Music = loadSound( 'asset/LEGACY - A Slave To No One MP3.mp3' );
    WinMusic = loadSound( 'asset/LEGACY - Can not Stop Winning MP3.mp3' );
    redDwarfImg.push( loadImage( 'asset/RedDwarf1.png' ) );
    redDwarfImg.push( loadImage( 'asset/RedDwarf2.png' ) );
    redDwarfImg.push( loadImage( 'asset/RedDwarf3.png' ) );
    blueDwarfImg.push( loadImage( 'asset/BlueDwarf1.png' ) );
    blueDwarfImg.push( loadImage( 'asset/BlueDwarf2.png' ) );
    blueDwarfImg.push( loadImage( 'asset/BlueDwarf3.png' ) );
    dwarfPhaseImg.push( loadImage( 'asset/Phase2BlueDwarf1.png' ) );
    dwarfPhaseImg.push( loadImage( 'asset/Phase2BlueDwarf2.png' ) );
    dwarfPhaseImg.push( loadImage( 'asset/Phase2BlueDwarf3.png' ) );
    snowImg.push( loadImage( 'asset/Whiteprincess.png' ) );
    titleImg.push( loadImage( 'asset/Title.png' ) );
}

function setup()
{
    createCanvas( 600, windowHeight );
    redDwarf = new dwarf( width / 2, 150, redDwarfImg );
    blueDwarf = new Bluedwarf( width / 2 - 80, 150, blueDwarfImg );
    snowprincess = new snowPrincess( width / 2, height - 100, snowImg );
    dwarfPhase = new dwarfPhase2( width / 2 - 80, 150, dwarfPhaseImg );
    title = new Title( width / 2, 200, titleImg );
    apple = new Title( snowprincess.position.x, snowprincess.position.y, appleImg );
    screen = 0;
    fontDeltaTime += deltaTime / 1000;
}

function draw()
{
    background( BackGround[ BACKGROUND ] );
    switch ( screen )
    {
    case 0:
        if ( !mainMusic.isPlaying() )
        {
            mainMusic.play();
            mainMusic.setVolume( 0.5 );
        }
        title.draw( titleImg[ 0 ] );
        rect( width / 2 - 150, height / 2 + 105, 300, 50 );
        rect( width / 2 - 150, height / 2 + 175, 300, 50 );
        textSize( 20 );
        textStyle( BOLD );
        text( "START && How to Play", width / 2 - 110, height / 2 + 135 );
        text( "CREDITS", width / 2 - 40, height / 2 + 205 );
        check = 1;
        if ( mouse_screen == 2 )
        {
            mouse_screen = 0;
            screen = 1;
        }
        else if ( mouse_screen == 1 )
        {
            mouse_screen = 0;
            screen = 2;
            check = 0;
        }
        break;
        //크레딧
    case 1:
        check = 1;
        push()
        fill( 220 );
        rect( 0, 50, 600, height - 100, 20 );
        pop()
        push()
        strokeWeight( 30 );
        textSize( 20 );
        textStyle( BOLD );
        text( "CREDIT", 250, 80 );
        text( 'Music : Got that from Devmarket. Thank you Devmarket!', 25, 120 );
        text( 'Design : I made these Image with PixelStudio.', 25, 160 );
        text( 'this game made by Seongmin Choi.', 25, 200 );
        text( 'If you think this game need to fix something,', 25, 240 );
        text( 'please give me some advise.', 25, 280 );
        text( 'This is the first game I made, so I felt immature.', 25, 320 );
        text( 'So I will take any advice in mind.', 25, 360 );
        text( "[If you want to back, you need to press F5]", 100, 540 );
        pop()
        break;
        //게임 시작
    case 2:
        push()
        fill( 220 );
        rect( 0, 50, 600, height - 100, 20 );
        pop()
        push()
        strokeWeight( 30 );
        textSize( 20 );
        textStyle( BOLD );
        text( "HOW TO PLAY", 220, 80 );
        text( 'Previous Story : Snow White left with the prince,', 50, 120 );
        text( 'and the seven dwarfs who were left behind', 50, 140 );
        text( 'began to go crazy as they missed the princess, ', 50, 160 );
        text( 'and eventually reached a situation where they killed', 50, 180 );
        text( 'each other. Eventually, after dealing with the ', 50, 200 );
        text( 'remaining two dwarfs,', 50, 220 );
        text( 'Snow White returned to finish the work.', 50, 260 );
        text( "Move : Up, Down, Left, Right arrow keys", 50, 300 );
        text( "Shoot : Space Bar", 50, 340 );
        text( "Phase 1 Tip : Blue Dwarf is real. Just shoot him.", 50, 380 );
        text( "Phase 1 Tip : If you take your finger off the space bar,", 50, 420 );
        text( "you will be invincible.", 50, 460 );
        text( "[Press mouse to start.]", 200, 540 );
        pop()
        break;
        //게임 스토리 3~5
    case 3:
        mainMusic.pause();
        check = 1;
        if ( !Phase1Music.isPlaying() )
        {
            Phase1Music.play();
            Phase1Music.setVolume( 0.2 );
        }
        redDwarf.update();
        redDwarf.particleDraw()
        blueDwarf.update();
        blueDwarf.particleDraw();
        snowprincess.update();
        snowprincess.draw( snowImg[ 0 ] );
        //dwarfHp bar
        push()
        fill( 0 );
        rect( 100, 50, 400, 10 );
        pop()
        push()
        fill( 255, 0, 0 );
        rect( 100, 50, 400 * ( blueDwarf.dwarfHp / 5000 ), 10 );
        pop()

        for ( let i = 0; i < snowprincess.Shoot.length; i++ )
        {
            let d = dist( snowprincess.Shoot[ i ].position.x, snowprincess.Shoot[ i ].position.y, blueDwarf.position.x +
                40, blueDwarf.position.y + 35 );

            if ( d <= snowprincess.Shoot[ i ].hitBoxR + blueDwarf.hitBoxR )
            {
                snowprincess.Shoot[ i ].isHit = true;
                blueDwarf.isHit = true;
                if ( snowprincess.Shoot[ i ].isHit == true && blueDwarf.isHit == true )
                {
                    snowprincess.Shoot.splice( i, 1 );
                    blueDwarf.dwarfHp = blueDwarf.dwarfHp - 2;
                }
            }

            if ( blueDwarf.dwarfHp <= 0 )
            {
                screen = 4;
                Phase1Music.pause();
            }

            for ( let i = 0; i < blueDwarf.particle.length; i++ )
            {
                let d = dist( blueDwarf.particle[ i ].position.x, blueDwarf.particle[ i ].position.y, snowprincess
                    .position.x, snowprincess.position.y );

                if ( d <= blueDwarf.particle[ i ].hitBoxR + snowprincess.hitBoxR )
                {
                    blueDwarf.particle[ i ].isHit = true;
                    snowprincess.isHit = true;
                    if ( blueDwarf.particle[ i ].isHit == true && snowprincess.isHit == true )
                    {
                        blueDwarf.particle.splice( i, 1 );
                        snowprincess.princessHp = snowprincess.princessHp - 1;
                    }
                }
            }

            for ( let i = 0; i < blueDwarf.particle1.length; i++ )
            {
                let d = dist( blueDwarf.particle1[ i ].position.x, blueDwarf.particle1[ i ].position.y, snowprincess
                    .position.x, snowprincess.position.y );

                if ( d <= blueDwarf.particle1[ i ].hitBoxR + snowprincess.hitBoxR )
                {
                    blueDwarf.particle1[ i ].isHit = true;
                    snowprincess.isHit = true;
                    if ( blueDwarf.particle1[ i ].isHit == true && snowprincess.isHit == true )
                    {
                        blueDwarf.particle1.splice( i, 1 );
                        snowprincess.princessHp = snowprincess.princessHp - 1;
                    }
                }
            }

            for ( let i = 0; i < redDwarf.particle.length; i++ )
            {
                let d = dist( redDwarf.particle[ i ].position.x, redDwarf.particle[ i ].position.y, snowprincess
                    .position.x, snowprincess.position.y );

                if ( d <= redDwarf.particle[ i ].hitBoxR + snowprincess.hitBoxR )
                {
                    redDwarf.particle[ i ].isHit = true;
                    snowprincess.isHit = true;
                    if ( redDwarf.particle[ i ].isHit == true && snowprincess.isHit == true )
                    {
                        redDwarf.particle.splice( i, 1 );
                        snowprincess.princessHp = snowprincess.princessHp - 1;
                    }
                }
            }

            for ( let i = 0; i < redDwarf.particle1.length; i++ )
            {
                let d = dist( redDwarf.particle1[ i ].position.x, redDwarf.particle1[ i ].position.y, snowprincess
                    .position.x, snowprincess.position.y );

                if ( d <= redDwarf.particle1[ i ].hitBoxR + snowprincess.hitBoxR )
                {
                    redDwarf.particle1[ i ].isHit = true;
                    snowprincess.isHit = true;
                    if ( redDwarf.particle1[ i ].isHit == true && snowprincess.isHit == true )
                    {
                        redDwarf.particle1.splice( i, 1 );
                        snowprincess.princessHp = snowprincess.princessHp - 1;
                    }
                }
            }

            if ( snowprincess.princessHp <= 0 )
            {
                screen = 6;
                Phase1Music.pause();
            }
        }
        break;
    case 4:
        check = 1;
        if ( !Phase2Music.isPlaying() )
        {
            Phase2Music.play();
            Phase2Music.setVolume( 0.3 );
        }
        dwarfPhase.update();
        dwarfPhase.particleDraw();
        snowprincess.update();
        snowprincess.draw( snowImg[ 0 ] );
        //dwarfHp bar
        push()
        fill( 0 );
        rect( 100, 50, 400, 10 );
        pop()
        push()
        fill( 255, 0, 0 );
        rect( 100, 50, 400 * ( dwarfPhase.dwarfHp / 3000 ), 10 );
        pop()
        for ( let i = 0; i < snowprincess.Shoot.length; i++ )
        {
            let d = dist( snowprincess.Shoot[ i ].position.x, snowprincess.Shoot[ i ].position.y, dwarfPhase.position
                .x + 40, dwarfPhase.position.y + 35 );

            if ( d <= snowprincess.Shoot[ i ].hitBoxR + dwarfPhase.hitBoxR )
            {
                snowprincess.Shoot[ i ].isHit = true;
                dwarfPhase.isHit = true;
                if ( snowprincess.Shoot[ i ].isHit == true && dwarfPhase.isHit == true )
                {
                    snowprincess.Shoot.splice( i, 1 );
                    dwarfPhase.dwarfHp = dwarfPhase.dwarfHp - 2;
                }
            }
        }

        for ( let i = 0; i < dwarfPhase.particle.length; i++ )
        {
            let d = dist( dwarfPhase.particle[ i ].position.x, dwarfPhase.particle[ i ].position.y, snowprincess
                .position.x, snowprincess.position.y );

            if ( d <= dwarfPhase.particle[ i ].hitBoxR + snowprincess.hitBoxR )
            {
                dwarfPhase.particle[ i ].isHit = true;
                snowprincess.isHit = true;
                if ( dwarfPhase.particle[ i ].isHit == true && snowprincess.isHit == true )
                {
                    dwarfPhase.particle.splice( i, 1 );
                    snowprincess.princessHp = snowprincess.princessHp - 1;
                }
            }
        }

        for ( let i = 0; i < dwarfPhase.particle1.length; i++ )
        {
            let d = dist( dwarfPhase.particle1[ i ].position.x, dwarfPhase.particle1[ i ].position.y, snowprincess
                .position.x, snowprincess.position.y );

            if ( d <= dwarfPhase.particle1[ i ].hitBoxR + snowprincess.hitBoxR )
            {
                dwarfPhase.particle1[ i ].isHit = true;
                snowprincess.isHit = true;
                if ( dwarfPhase.particle1[ i ].isHit == true && snowprincess.isHit == true )
                {
                    dwarfPhase.particle1.splice( i, 1 );
                    snowprincess.princessHp = snowprincess.princessHp - 1;
                }
            }
        }

        for ( let i = 0; i < dwarfPhase.particle2.length; i++ )
        {
            let d = dist( dwarfPhase.particle2[ i ].position.x, dwarfPhase.particle2[ i ].position.y, snowprincess
                .position.x, snowprincess.position.y );

            if ( d <= dwarfPhase.particle2[ i ].hitBoxR + snowprincess.hitBoxR )
            {
                dwarfPhase.particle2[ i ].isHit = true;
                snowprincess.isHit = true;
                if ( dwarfPhase.particle2[ i ].isHit == true && snowprincess.isHit == true )
                {
                    dwarfPhase.particle2.splice( i, 1 );
                    snowprincess.princessHp = snowprincess.princessHp - 1;
                }
            }
        }

        if ( dwarfPhase.dwarfHp == 0 )
        {
            screen = 5;
            Phase2Music.pause();
        }

        if ( snowprincess.princessHp == 0 )
        {
            screen = 6;
            Phase2Music.pause();
        }
        break;
    case 5:
        check = 1;
        if ( !WinMusic.isPlaying() )
        {
            WinMusic.play();
            WinMusic.setVolume( 0.25 );
        }
        push()
        fill( 220 );
        rect( 0, height / 2 - 50, 600, 100, 25 );
        pop()
        push()
        strokeWeight( 30 );
        textSize( 30 );
        textStyle( BOLD );
        text( "You Win!!!! Thank you for play my game.", 0, height / 2 );
        pop()
        break;
    case 6:
        check = 1;
        push()
        fill( 255, 0, 0 );
        rect( 0, height / 2 - 50, 600, 100 );
        pop()
        push()
        strokeWeight( 30 );
        textSize( 30 );
        textStyle( BOLD );
        text( "YOU DIED", 220, height / 2 - 10 );
        text( "If you want to retry you should press F5", 10, height / 2 + 40 );
        pop();
        break;
    }

}

function mousePressed()
{
    if ( check == 0 )
    {
        screen += 1;
    }
    if ( mouseX > width / 2 - 150 && mouseY > height / 2 + 105 && mouseX < width / 2 + 150 && mouseY < height / 2 +
        155 && check == 1 )
    {
        mouse_screen = 1;
    }
    else if ( mouseX > width / 2 - 150 && mouseY > height / 2 + 175 && mouseX < width / 2 + 150 && mouseY < height / 2 +
        225 && check == 1 )
    {
        mouse_screen = 2;
    }
}
