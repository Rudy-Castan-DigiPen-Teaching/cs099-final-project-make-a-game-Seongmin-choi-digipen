1 Shapes
========
Shapes is used to draw shapes.
------------------------------
I used Shapes such as circle, rect. There are some Example what I used
----------------------------------------------------------------------
    - circle
        Dwarf Particle       ex)circle( this.position.x, this.position.y, this.hitBoxR = 15 );
        SnowWhite Particle   ex)circle( this.position.x, this.position.y, this.hitBoxR = 15 );
        Dwarf Hitbox         ex)circle( this.position.x + 40, this.position.y + 35, this.hitBoxR = 40 );
        SnowWhite Hitbox     ex)circle( this.position.x, this.position.y, this.hitBoxR = 20 );

    - rect
        Select Button        ex)rect( width / 2 - 150, height / 2 + 105, 300, 50 );
        How to play Box      ex)rect( 0, 50, 600, height - 100, 20 );
        Credit Box           ex)rect( 0, 50, 600, height - 100, 20 );
        Game Over Box        ex)rect( 0, height / 2 - 50, 600, 100 );

2 Colors
========
Colors are used to fill the shapes with colors.
-----------------------------------------------
There are some Example what I used
----------------------------------
    - Dwarf Particle color, Game Over Box color
       R   G   B
      255  0   0

    - Snow Particle color, Select Button color
       R   G   B
       0   0   0   

    - How to Play Box color, Credit Box color
       R   G   B
      220 220 220     
    
    - text you died color
       R   G   B
      255 255 255    

3 Variables
===========
Varibles can specify the value I want, and I can use it whenever I want.
If you want to change the shape or color, it can be replaced according to the specified value.
------------------------------------------------------------------------
I put a lot of values in variables. There are a few Example what I used
----------------------------------------------------------------------

    For example, the let dwarfPhase I used can be used anywhere I want, 
    such as dwarfPhase.update(), crash judgment, etc. by newly importing class dwarfPhase2.

4 Conditional Statements
========================
Conditional statements only work according to the conditions I wrote, and when they are out of the conditions I wrote, they recognize the value as false and do not work.
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
So I'm gonna show you the conditions I wrote.
---------------------------------------------

-{bluedwarf.js 118 ~ 133}

    collision()
        {
        if ( this.position.x >= width - 40 )
        {
            this.velocity = new Vec2( -1.5, 0 );
        }
        else if ( this.position.x <= 0 )
        {
            this.velocity = new Vec2( 1.5, -1 );
        }
        if ( this.position.y <= 0 )
        {
            this.velocity = new Vec2( 1.5, 1 );
        }
      }

If the position was to be larger than the x and y values of the wall, 

it was given the opposite of the value of velocity, make it keep moving.

-{snow.js 35 ~ 56}    

        control()
    {
        if ( keyIsDown( LEFT_ARROW ) )
        {
            this.position.x -= 2.5;
        }

        if ( keyIsDown( RIGHT_ARROW ) )
        {
            this.position.x += 2.5;
        }

        if ( keyIsDown( UP_ARROW ) )
        {
            this.position.y -= 2.5;
        }

        if ( keyIsDown( DOWN_ARROW ) )
        {
            this.position.y += 2.5;
        }
    }

Increasing the value of position.x, position.y to fit the direction and stopping the increase

in the value when the direction key was not pressed were eliminated.
    
-{sketch.js 396 ~ 412}

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

When check = 0 in function setup and when mouse click, coded to move on to the next screen. 

If you don't want to flip the next screen with a mouse click, you can set the value to check = 1 

so that it doesn't flip to the next screen.
        
5 Loops
=======
A loop statement is an instruction to repeat within the range I set. So, in the end, the code that is outside the range I set does not run repeatedly. There are some Example What I 
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
used
----

Hitbox judgment using a for statement - {sketch.js 163 ~ 258}
        
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
Both the hitbox and the particle were made into circles, 
making the hitbox is true value when the added value between radius was greater than the distance value between the two centers.

A continuously functioning Dwarf ammunition using a for statement - {bluedwarf.js 93 ~ 116}
        
        for ( let i = 0; i < this.particle.length; i++ )
        {
            this.particle[ i ].update();
            this.particle[ i ].draw();

            if ( this.particle[ i ].position.y > height )
            {
                this.particle.splice( i, 1 );
            }
        }

6 Functions
===========
Function can easily reduce code to write longer and harder, and add parameters to function.
-------------------------------------------------------------------------------------------

    draw( image_reference ) - {Title.js 20 ~ 26}
    {
        push();
        imageMode( CENTER );
        image( image_reference, this.position.x, this.position.y );
        pop();
    } 

7 Classes
=========
To make coding easier, I made various classes. So, I've used several classes.
-----------------------------------------------------------------------------
### What classes I used.

    1. class Bluedwarf
    2. class blueParticle
    3. class blueParticle1
    4. class Phase2Particle
    5. class Phase2Particle1
    6. class Phase2Particle2
    7. class dwarfPhase2
    8. class Reddwarf
    9. class snowPrincess
    10. class snowParticle
    11. class Title
    12. class Vec2

### The role of each classes.

    -Boss Particle(particle is Bullet curtain) related classes
        class blueParticle
        class blueParticle1
        class Phase2Particle
        class Phase2Particle1
        class Phase2Particle2
        The classes related to boss particles included patterns and Bullet curtain that fit Phase 1 and Phase 2.

    -Player Particle related class
        class snowParticle
        It is not much different from the boss particles described above, but included a laser-like particle that the player fires in a basic shell game.
    
    -Character related classes
        class Bluedwarf
        class dwarfPhase2
        class Reddwarf
        class snowPrincess
        The character-related classes included the character's position, velocity, image arrangement, animation and pattern related to the shoot, and hitbox.

    -Physics related class
        class Vec2
        To express physics to be used in various movements and Boss particle. So, I reuse Vec2 class when I did exercise.

    -Image related class
        class Title
        I just made it to show the title image.

### Example
    
    Let me take an example from Bluedwarf.
    class Bluedwarf
    {
        constructor( x, y, imageAnimate )
        {
        this.position = new Vec2( x, y );
        this.velocity = new Vec2( -1.5, 0.5 );
        this.imageAnimate = imageAnimate;
        this.imageDeltaTime = 0;
        this.pattern = 0;
        this.patternCheck = 0;
        this.dwarfHp = 5000;
        this.particle = [];
        this.particle1 = [];
        this.isHit = false;
        this.hitBoxR = 40;
        this.patternDeltaTime = 0;
        }

        Classes are made up of these types of functions.

8 Arrays
========
Arrays can specify various things in an empty array, such as lets, and call them one by one.
I used Arrays. There are some Example what I used
--------------------------------------------------------------------------------------------
    
### What arrays I used.

    For example, I will explain using blueDwarfImg.
    I pushed 3 images from the asset file to the array in blueDwarfImg.
    Thus, the 3 images were assigned imageAnimate[0], imageAnimate[1], and imageAnimate[2], respectively, to class Bluedwarf.
    So I set up this images of 3 sheets to appear according to time, so I made an animation.


    
    

