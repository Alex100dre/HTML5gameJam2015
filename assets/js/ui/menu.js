app.ui.menu = {
	preload: function(){
        // Images
        // game.load.image('bg', 'assets/images/sprites/ui/menu/bg.jpg');
        // game.load.spritesheet('btn2', 'assets/images/sprites/ui/menu/play.png', 345, 183);
        // game.load.spritesheet('btn1', 'assets/images/sprites/ui/menu/options.png', 345, 183);
        game.load.spritesheet('btn0', 'assets/img/ui/menu/jouer.png', 256, 100);
        // GLOBAL SOUNDS
        // game.load.audio('themeMenu',  ['assets/audio/theme/menu/theme.mp3', 'assets/audio/theme/menu/theme.ogg']); 

    },

    create: function(){
    	button = game.add.button(game.world.centerX - 95, 460, 'btn0', app.ui.menu.actionOnClick, this, 2, 1, 0);
    	button.name = 'play';
    	button.input.useHandCursor = true;
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