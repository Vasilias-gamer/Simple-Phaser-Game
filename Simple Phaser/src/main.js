var config = {
    type: Phaser.AUTO,
    width:950,
    height:550,
    physics:{
        default:'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene:{
        preload: preload,
        create: create,
        update: update
    }
};

var player;
var game = new Phaser.Game(config);
function preload()
{
    this.load.image('bg','arts/bg.jpg')
    this.load.image('charac','arts/charac.png')
    this.load.image('p','arts/platform.png')
}
function create(){
    s = this.add.image(475, 275, 'bg');
    
    s.setScale(1/2);

    var platform = this.physics.add.staticGroup();

    platform.create(68,215,'p').setScale(0.5,0.2).refreshBody();
    platform.create(234,335,'p').setScale(1.3,0.2).refreshBody();
    platform.create(135,455,'p').setScale(1.3,0.2).refreshBody();
    platform.create(490,455,'p').setScale(0.5,0.2).refreshBody();
    platform.create(490,455,'p').setScale(0.5,0.2).refreshBody();
    platform.create(750,455,'p').setScale(0.5,0.2).refreshBody();
    platform.create(890,335,'p').setScale(0.5,0.2).refreshBody();
    platform.create(450,559,'p').setScale(5,0.1).refreshBody();

    player = this.physics.add.sprite(300, 100, 'charac').setScale(.1);
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    cursors = this.input.keyboard.createCursorKeys();

    this.physics.add.collider(player, platform);
}
function update(){
    
    if (cursors.right.isDown)
    {
        player.setVelocityX(160);
    }
    else
    {
        player.setVelocityX(0);
    }

    if (cursors.up.isDown && player.body.touching.down)
    {
        player.setVelocityY(-330);
    }
    
    console.log(player.body.touching.down);
}