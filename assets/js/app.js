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

            var menu = {
                preload: app.ui.menu.preload, 
                create: app.ui.menu.create, 
                update: app.ui.menu.update,
                render: app.ui.menu.render
            }; 

            var loose = {
                preload: app.ui.loose.preload, 
                create: app.ui.loose.create, 
                update: app.ui.loose.update,
                render: app.ui.loose.render
            };

            var play = {
                preload : appCore.preload,
                create : appCore.create,
                update : appCore.update,
                render : appCore.render
            };
            var nextlvl = {
                preload : appCore.preload,
                create : appCore.create,
                update : appCore.update,
                render : appCore.render
            }


            game.state.add('menu', menu);
            game.state.add('loose', loose);
            game.state.add('play', play);
            game.state.add('nextlvl', nextlvl);
            game.state.start('menu');
        }
    };