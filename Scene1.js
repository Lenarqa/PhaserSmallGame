class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }
    
    preload(){
        //background
        this.load.image("background", "assets/background.png");

        //font
        this.load.bitmapFont("pixelFont", "assets/font/font.png", "assets/font/font.xml");

        //ships
        this.load.spritesheet("ship", "assets/spritesheets/ship.png", {frameWidth: 16, frameHeight: 16});
        this.load.spritesheet("ship2", "assets/spritesheets/ship2.png", {frameWidth: 32, frameHeight: 16});
        this.load.spritesheet("ship3", "assets/spritesheets/ship3.png", {frameWidth: 32, frameHeight: 32});
        this.load.spritesheet("explosion", "assets/spritesheets/explosion.png", {frameWidth: 16, frameHeight: 16});
        this.load.spritesheet("powerUp", "assets/spritesheets/power-up.png", {frameWidth: 16, frameHeight: 16});
        this.load.spritesheet("player", "assets/spritesheets/player.png", {frameWidth: 16, frameHeight: 24});
        this.load.spritesheet("beam", "assets/spritesheets/beam.png", {frameWidth: 16, frameHeight: 16});
        
        
        //this.load.image("ship2", "assets/ship2.png");
        //this.load.image("ship3", "assets/ship3.png");
    }

    create(){
        this.anims.create({
            key: "ship1_anim",
            frames: this.anims.generateFrameNumbers("ship"),
            frameRate: 20,
            repeat: -1  
        });

        this.anims.create({
            key: "ship2_anim",
            frames: this.anims.generateFrameNumbers("ship2"),
            frameRate: 20,
            repeat: -1  
        });

        this.anims.create({
            key: "ship3_anim",
            frames: this.anims.generateFrameNumbers("ship3"),
            frameRate: 20,
            repeat: -1  
        });

        this.anims.create({
            key: "explosion",
            frames: this.anims.generateFrameNumbers("explosion"),
            frameRate: 20,
            repeat: 0,
            hideOnComplete: true  
        });

        this.anims.create({
            key: "red",
            frames: this.anims.generateFrameNumbers("powerUp", {
                start: 0,
                end: 1
            }),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: "gray",
            frames: this.anims.generateFrameNumbers("powerUp",{
                start: 2,
                end: 3
            }),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: "player",
            frames: this.anims.generateFrameNumbers("player"),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: "beam",
            frames: this.anims.generateFrameNumbers("beam"),
            frameRate: 20,
            repeat: -1
        });

        this.add.text(20,20,"Loading game...");
        this.scene.start("playGame");  
    }

}