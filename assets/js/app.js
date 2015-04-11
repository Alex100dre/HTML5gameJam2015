    var app = {
        init : function () {
            console.log('Jeu initialisé.');

            var transparent = false,
                antialias = true,
                appCore = app.core;

            // Create of the Phaser game instance OUYA RES 1280 720
            game = new Phaser.Game(
                window.innerWidth, window.innerHeight,
                (app.data.enableDebugging ? Phaser.CANVAS : Phaser.AUTO),
                'game-div',
                // {preload: app.core.preload, 
                // create: app.core.create, 
                // update: app.core.update,
                // render: app.core.render
                // },
                transparent,
                antialias
            );
            console.log(game);

            game.state.add(
                'play',
                {
                    preload : appCore.preload,
                    create : appCore.create,
                    update : appCore.update,
                    render : appCore.render
                }
            );
            game.state.start('play');
        }
    };