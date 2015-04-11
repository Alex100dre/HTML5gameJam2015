app.core.people = {
    /* ======================================PRELOAD=================================== */
    preload: function () {
    	console.log(window);
    	// Spritesheet
    	game.load.spritesheet('people0', 'assets/img/sprites/people/0.png', 212,396);
    },

    /* ======================================CREATE=================================== */
    create: function () {
    	// game.time.events.repeat(Phaser.Timer.SECOND * 4, addsprite, this);
    	// app.data.game.add.sprite(0,0,'people0');
    	// this.addSprite();
    	app.data.peopleGroup = game.add.group();
    	this.addPeoples();
    	game.time.events.loop(Phaser.Timer.SECOND * app.data.timeLvl, this.nextLvl, this);
    },
    peopleSelected: function (people) {
        app.data.score += 10;
        app.data.scoreText.text = 'Score : '+app.data.score;
        console.log(app.data.score);
        people.frame = 1;
        
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
    	var peopleArea 		 = app.data.peopleArea,
			peopleAreaWidth  = peopleArea.width,
			peopleAreaHeight = peopleArea.height,
			peopleNb		 = /*Math.floor(Math.random() * 6) + 1*/ 2
			people = null,

			random_height    = 0,
			random_width     = 0;

		console.log(peopleNb);
		for(var i = 0; i<peopleNb; i++ ){
			// random_height = Math.floor((Math.random() * peopleAreaHeight) + 1);
			// random_width  = Math.floor((Math.random() * peopleAreaWidth) + 1);
			// app.data.peopleList[i] = game.add.sprite(random_height,random_width, 'people0');
			// app.data.peopleList[i] = game.add.sprite(random_height,random_width, 'people0');
			people = app.data.peopleGroup.create(game.world.width*.5, game.world.height-this.height, 'people0');
			people.position.y  = game.world.height-people.height;
			people.position.x  = game.world.width*.5-people.width*i;

            people.inputEnabled = true;

            people.input.useHandCursor = true;

            people.events.onInputDown.add(this.peopleSelected,this);

		}
		this.lastCreate = game.time.now;
	},

	nextLvl : function(){
		console.log('hey as-tu vu les quenoille !');
		app.data.peopleGroup.removeChildren();
		console.log(game.time.now - this.lastCreate);
		if( game.time.now - this.lastCreate > 10000){
			this.addPeoples();
		}
		// this.addPeoples();
		// var timer = game.time.events.repeat(Phaser.Timer.SECOND * app.data.timeLvl, 1, this.addPeoples, this);
		// for(var i = 0; i<app.data.peopleList.length; i++){
		// 	app.data.peopleGroup.removeChildren();
		// 	console.log('hey as-tu vu les quenoille !');
		// }
	}
};