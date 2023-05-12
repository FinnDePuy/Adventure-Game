class Island1 extends AdventureScene {
    constructor(){
        super('island1');
    }
    onEnter(){
        let rock = this.add.text(this.w * 0.5, this.w * 0.3, "⛰️ sharp rock")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("A very sharp rock I wonder if this could be used to do anything")
            })
            .on('pointerdown', () => {
                this.showMessage("you grabbed the sharp rock");
                this.gainItem('rock');
                this.tweens.add({
                    targets: rock,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => rock.destroy()
                })
            })
        let tree = this.add.text(this.w * 0.5, this.w * 0.5, "🌴 tree")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("A tree I wonder if I could chop it down with anything");
            })
            .on('pointerdown', () => {
                if(this.hasItem("rock")){
                    this.showMessage("You pick up the logs.");
                    this.gainItem('logs');
                    this.loseItem('rock');
                    this.showMessage("cutting down the tree broke the rock, and put it into an unusable state");
                    if(this.createRaft()){
                        this.tweens.add({
                            targets: raft,
                            alpha: { from: 0, to: 1 },
                        }); 
                    }
                    this.tweens.add({
                        targets: tree,
                        y: `-=${2 * this.s}`,
                        alpha: { from: 1, to: 0 },
                        duration: 500,
                        onComplete: () => tree.destroy()
                    }); 
                }
                else{
                    this.showMessage("I should look around for something to chop this down");
                }
            })
        let shell1 = this.add.text(this.w * 0.2, this.w * 0.5, "🐚 shell")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("A few shells are scattered across the island you are on");
                this.tweens.add({
                    targets:shell1,
                    x: `-=${1* this.s}`,
                    duration: 100
                })
            })
            .on('pointerout', () => {
                this.tweens.add({
                    targets: shell1,
                    x: `-=${-1 * this.s}`,
                    duration: 100
                })
            })
            .on('pointerdown', () => {
                this.showMessage("you grabbed some shells I wonder what these are for");
                this.gainShell();
                //this.gainItem('shell');
                this.tweens.add({
                    targets: shell1,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => shell1.destroy()
                })
            })
        let rope = this.add.text(this.w * 0.24, this.w * 0.3, "🧵 rope")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("some rope was buried a little in the sand");
            })
            .on('pointerdown', () => {
                this.showMessage("You pick up the rope.");
                this.gainItem('rope');
                if(this.createRaft()){
                    this.tweens.add({
                        targets: raft,
                        alpha: { from: 0, to: 1 },
                    }); 
                }
                this.tweens.add({
                    targets: rope,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => rope.destroy()
                }); 
            })
        let pirate = this.add.text(this.w * 0.1, this.w * 0.1, "🧔🏽 Pirate")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("This pirate looks familiar maybe thats just you")
            })
        let raft = this.add.text(this.w * 0.1, this.w * 0.2, "🛶 raft") 
            .setFontSize(this.s *2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("A crafted raft made from wood and rope with an oar as well");
            })
            .on('pointerdown', () => {
                    this.gotoScene('ocean');
            })
            this.tweens.add({
                targets: raft,
                alpha: { from: 1, to: 0 },
            })
    }
}

class Ocean extends AdventureScene {
    constructor(){
        super('ocean');
    }
    onEnter(){
        if(!this.hasItem('oar')){
            this.showMessage("You're drifting away, to an island. Get an oar and you can choose");
            this.gotoScene('island3');
        }
        if(this.hasItem('compass')){
            let home = this.add.text(this.w * 0.5, this.w * 0.1, "🏘️ Civilization")
                .setFontSize(this.s * 2)
                .setInteractive()
                .on('pointerover', () => {
                    this.showMessage("What seems like a far away place. But a very familiar place at that.");
                })
                .on('pointerdown', () => {
                    this.showMessage("you started rowing towards Civilization");    
                    this.gotoScene('home');
                })
        }
        let raft = this.add.text(this.w * 0.3, this.w * 0.3, "🛶 raft") 
            .setFontSize(this.s *2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("A crafted raft made from wood, keeping you from the ocean");
            })
        let pirate = this.add.text(this.w * 0.3, this.w * 0.31, "🧔🏽 Pirate")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("This pirate looks familiar maybe thats just you")
            })
        let islandSprite = this.add.text(this.w* 0.1, this.w * 0.2 , "🏝️ Island 1")
            .setFontSize(this.s *2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("An island that I could row my way over to. I wonder what's on it");
            })
            .on('pointerdown', () => {
                this.showMessage("you started rowing to an island in the distance");    
                this.gotoScene('island2');
            })
        let islandSprite2 = this.add.text(this.w* 0.1, this.w * 0.5 , "🏝️ Island 2")
            .setFontSize(this.s *2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("An island that I could row my way over to. I wonder what's on it");
            })
            .on('pointerdown', () => {
                this.showMessage("you started rowing to an island in the distance");    
                this.gotoScene('island3');
            })
    }
}

class Island2 extends AdventureScene {
    constructor(){
        super('island2');
    }
    onEnter(){
        if(!this.hasItem('oar')){
            let oar = this.add.text(this.w * 0.1, this.w * 0.25, "🥄 oar")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("an oar used to steer a boat");
            })
            .on('pointerdown', () => {
                this.showMessage("You picked up the oar");
                this.gainItem('oar');
                this.tweens.add({
                    targets: oar,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => oar.destroy()
                })
            })
            this.tweens.add({
                targets: oar,
                alpha: { from: 1, to: 0 },
            })
        let wood = this.add.text(this.w * 0.5, this.w * 0.1, "🌳 wood")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Some logs found on the beach these seem helpful");
            })
            .on('pointerdown', () => {
                this.showMessage("You pick up the wood and immediately turned it into a makeshift oar");
                this.gainItem('wood');
                if(this.createOar()){
                    this.tweens.add({
                        targets: oar,
                        alpha: { from: 0, to: 1 },
                    }); 
                }
                this.tweens.add({
                    targets: wood,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => wood.destroy()
                }); 
            })
        }
        let raft = this.add.text(this.w * 0.1, this.w * 0.2, "🛶 raft") 
            .setFontSize(this.s *2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("A crafted raft made from wood, keeping you from the ocean. Use it to adventure to another island.");
            })
            .on('pointerdown', () => {
                this.showMessage("You sail off the island back into the ocean");
                this.gotoScene('ocean');
            })
        if(!this.hasItem('compass')){
            let compass = this.add.text(this.w * 0.2, this.w * 0.3, "🧭 compass")
                .setFontSize(this.s* 2)
                .setInteractive()
                .on('pointerover', () => {
                    this.showMessage("A still working compass found in the sand. Maybe this could be used to go back to civilization");
                })
                .on('pointerdown', () => {
                    this.showMessage("A compass is now in your possesion. Maybe I could find my way home now.");
                    this.gainItem('compass');
                    this.tweens.add({
                        targets: compass,
                        y: `-=${2 * this.s}`,
                        alpha: { from: 1, to: 0 },
                        duration: 500,
                        onComplete: () => compass.destroy()
                    }); 
                })
        }
        let shell1 = this.add.text(this.w * 0.2, this.w * 0.5, "🐚 shell")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("A few shells are scattered across the island you are on");
                this.tweens.add({
                    targets:shell1,
                    x: `-=${1* this.s}`,
                    duration: 100
                })
            })
            .on('pointerout', () => {
                this.tweens.add({
                    targets: shell1,
                    x: `-=${-1 * this.s}`,
                    duration: 100
                })
            })
            .on('pointerdown', () => {
                this.showMessage("you grabbed some shells I wonder what these are for");
                this.gainShell();
                //this.gainItem('shell');
                this.tweens.add({
                    targets: shell1,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => shell1.destroy()
                })
            })
    }
}

class Island3 extends AdventureScene {
    constructor(){
        super('island3');
    }
    onEnter(){
        if(!this.hasItem('oar')){
            let oar = this.add.text(this.w * 0.1, this.w * 0.25, "🥄 oar")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("an oar used to steer a boat");
            })
            .on('pointerdown', () => {
                this.showMessage("You picked up the oar");
                this.gainItem('oar');
                this.tweens.add({
                    targets: oar,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => oar.destroy()
                })
            })
            this.tweens.add({
                targets: oar,
                alpha: { from: 1, to: 0 },
            })
            let wood = this.add.text(this.w * 0.5, this.w * 0.1, "🪵 wood")
                .setFontSize(this.s * 2)
                .setInteractive()
                .on('pointerover', () => {
                    this.showMessage("Some logs found on the beach these seem helpful");
                })
                .on('pointerdown', () => {
                    this.showMessage("You pick up the wood and immediately turned it into a makeshift oar");
                    this.gainItem('wood');
                    if(this.createOar()){
                        this.tweens.add({
                            targets: oar,
                            alpha: { from: 0, to: 1 },
                        }); 
                    }
                    this.tweens.add({
                        targets: wood,
                        y: `-=${2 * this.s}`,
                        alpha: { from: 1, to: 0 },
                        duration: 500,
                        onComplete: () => wood.destroy()
                    }); 
                })
            }
        let raft = this.add.text(this.w * 0.1, this.w * 0.2, "🛶 raft") 
            .setFontSize(this.s *2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("A crafted raft made from wood, keeping you from the ocean. Use it to adventure to another island.");
            })
            .on('pointerdown', () => {
                this.showMessage("You sail off the island back into the ocean");
                this.gotoScene('ocean');
            })
        let shell1 = this.add.text(this.w * 0.2, this.w * 0.5, "🐚 shell")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("A few shells are scattered across the island you are on");
                this.tweens.add({
                    targets:shell1,
                    x: `-=${1* this.s}`,
                    duration: 100
                })
            })
            .on('pointerout', () => {
                this.tweens.add({
                    targets: shell1,
                    x: `-=${-1 * this.s}`,
                    duration: 100
                })
            })
            .on('pointerdown', () => {
                this.showMessage("you grabbed some shells I wonder what these are for");
                this.gainShell();
                this.tweens.add({
                    targets: shell1,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => shell1.destroy()
                })
            })
        let hut = this.add.text(this.w * 0.4, this.w * 0.1, "🏠 hut")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("An abandoned hut on the beach, I could really use a rest");
            })
            .on('pointerdown', () => {
                this.showMessage("You go into the hut and rest on the floor");
                this.gotoScene('outro');
            })
    }
}

class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    create() {
        this.add.text(50,50, "Lost at Sea").setFontSize(50);
        this.add.text(50,100, "Click anywhere to play.").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('island1'));
        });
    }
}

class Outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    create() {
        this.add.text(50, 50, "That's all!").setFontSize(50);
        this.add.text(50, 100, "You sleep in the hut and realize its comfort is good enough to \nsurvive. The hut has a desalination kit and farming equipment. \nSet for a little while longer.").setFontSize(50);
        this.add.text(50, 250, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}

class Home extends Phaser.Scene {
    constructor() {
        super('home');
    }
    create(){
        this.add.text(50, 50, "That's all!").setFontSize(50);
        this.add.text(50, 150, "Click anywhere to restart.").setFontSize(20);
        this.add.text(50, 100, "Welcome Home. I'm sure you'll be reunited with your family soon.").setFontSize(40);
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    backgroundColor: '#1cb2f5', 
    scene: [Intro, Island1, Ocean, Island2, Island3, Outro, Home],
    title: "Adventure Game",
});