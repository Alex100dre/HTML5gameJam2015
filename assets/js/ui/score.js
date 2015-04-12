app.ui.score = {
    /* ======================================PRELOAD=================================== */
    preload: function () {

    },

    /* ======================================CREATE=================================== */
    create: function () {
    	// The score
        scoreString = 'Score : ';
        hpString = 'HP : ';
        app.data.scoreText = game.add.text(10, 10, scoreString + app.data.score, { font: '34px Arial', fill: 'cyan' });
        app.data.playerText = game.add.text(game.camera.width - 120,10 , hpString + app.data.player.hp, { font: '34px Arial', fill: 'cyan' });
    },
    /* ======================================UPDATE=================================== */
    update: function () {

    },

    /* ======================================RENDER=================================== */
    render: function () {
        //Debugging
        if (app.data.settings.enableDebugging) {
           
        }

        //Pause
        if(app.data.isPaused){
          
        }
    }
};