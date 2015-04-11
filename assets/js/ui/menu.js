app.ui.menu = {
	preload: function(){
        // Images
        game.load.image('bg', 'assets/img/ui/menu/bg.jpg');
        game.load.spritesheet('btn0', 'assets/img/ui/menu/jouer.png', 392, 203);
        // GLOBAL SOUNDS
        // game.load.audio('themeMenu',  ['assets/audio/theme/menu/theme.mp3', 'assets/audio/theme/menu/theme.ogg']); 

    },

    create: function(){
        bg=game.add.sprite(0,0,'bg');

        var bHeight = game.camera.height;

        var bWidth = (bg.width * bHeight)/bg.height;

        bg.width = bWidth;
        bg.height = bHeight;
        bg.x = game.canvas.width*.5-bg.width*.5;


    	button = game.add.button(game.world.centerX - 256, game.world.centerY-100, 'btn0', app.ui.menu.actionOnClick, this, 2, 1, 0);
    	button.name = 'play';
    	button.input.useHandCursor = true;
        button.alpha = 0;

        game.add.tween(button).to( { alpha: 1 }, 1000, Phaser.Easing.Bounce.Out, true);
    },

    gofull : function() {

        game.scale.startFullScreen();

    },

    update: function(){
        
    },

    render : function(){

    },

    actionOnClick:function(btn){
    	console.log('toto');
        // console.log(btn.name);
        game.state.start(btn.name);
    }
}