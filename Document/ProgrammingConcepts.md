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
I put a lot of values in variables. There are some Example what I used
----------------------------------------------------------------------
### Load asset
- Image

    -Character 
        let redDwarf;
        let redDwarfImg = [];
        let blueDwarf;
        let blueDwarfImg = [];
        let dwarfPhase;
        let dwarfPhaseImg = [];
        let snowImg = [];
        let snowprincess;
        let appleImg = [];
        let titleImg = [];
    
    -Background
        let BackGround = [];

    -Title
        let title;

- Sound

    -Background

4 Conditional Statements
========================
I used Shapes such as circle, rect. There are some Example what I used
----------------------------------------------------------------------
    - circle
        Dwarf Particle
        SnowWhite Particle
        Dwarf Hitbox
        SnowWhite Hitbox

    - rect
        Select Button
        How to play Box
        Credit Box
        Game Over Box

5 Loops
=======
I used Shapes such as circle, rect. There are some Example what I used
----------------------------------------------------------------------
    - circle
        Dwarf Particle
        SnowWhite Particle
        Dwarf Hitbox
        SnowWhite Hitbox

    - rect
        Select Button
        How to play Box
        Credit Box
        Game Over Box

6 Functions
===========
I used Shapes such as circle, rect. There are some Example what I used
----------------------------------------------------------------------
    - circle
        Dwarf Particle
        SnowWhite Particle
        Dwarf Hitbox
        SnowWhite Hitbox

    - rect
        Select Button
        How to play Box
        Credit Box
        Game Over Box

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



8 Arrays
========
I used Shapes such as circle, rect. There are some Example what I used
----------------------------------------------------------------------
    - circle
        Dwarf Particle
        SnowWhite Particle
        Dwarf Hitbox
        SnowWhite Hitbox

    - rect
        Select Button
        How to play Box
        Credit Box
        Game Over Box         
             
    
    

