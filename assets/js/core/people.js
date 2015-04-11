app.core.people = {
    /* ======================================PRELOAD=================================== */
    preload: function () {
    	console.log(window);
    	// Spritesheet
    	game.load.image('people0', 'assets/img/sprites/people/0.png');
    },

    /* ======================================CREATE=================================== */
    create: function () {
    	// game.time.events.repeat(Phaser.Timer.SECOND * 4, addsprite, this);
    	// app.data.game.add.sprite(0,0,'people0');
    	// this.addSprite();
    	this.addPeoples();
    	game.time.events.add(Phaser.Timer.SECOND * app.data.timeLvl, this.nextLvl, this);
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
    },

    addPeoples: function(){
    	console.log('tototo')
    	var peopleArea 		 = app.data.peopleArea,
			peopleAreaWidth  = peopleArea.width,
			peopleAreaHeight = peopleArea.height,
			peopleNb		 = Math.floor(Math.random() * 6) + 1

			random_height    = 0,
			random_width     = 0;

		console.log(peopleNb);
		for(var i = 0; i<peopleNb; i++ ){
			random_height = Math.floor((Math.random() * peopleAreaHeight) + 1);
			random_width  = Math.floor((Math.random() * peopleAreaWidth) + 1);
			app.data.peopleList[i] = game.add.sprite(random_height,random_width, 'people0');
			app.data.peopleList[i] = game.add.sprite(random_height,random_width, 'people0');
		}
	},
	nextLvl : function(){
		console.log('hey as-tu vu les quenoille !');
	}
};