app.ui.score = {
    /* ======================================PRELOAD=================================== */
    preload: function () {

    },

    /* ======================================CREATE=================================== */
    create: function () {
    	// The score
        scoreString = 'Score : ';
        app.data.scoreText = game.add.text(10, 10, scoreString + app.data.score, { font: '34px Arial', fill: '#000' });
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