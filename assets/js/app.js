(function (Phaser) {
    'use strict';

    var app = {
        init : function () {
            console.log('Jeu initialisé.');

            var transparent = false;
            var antialias = true;

            // Create of the Phaser game instance OUYA RES 1280 720
            var game = new Phaser.Game(
                window.innerWidth, window.innerHeight,
                (app.data.enableDebugging ? Phaser.CANVAS : Phaser.AUTO),
                'game-div',
                // {preload: app.core.preload, 
                // create: app.core.create, 
                // update: app.core.update,
                // render: app.core.render
                // },
                transparent,
                antialias);
            }
    };

    window.app = app;

}(Phaser));