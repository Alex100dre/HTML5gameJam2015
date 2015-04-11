app.core.people = {
    /* ======================================PRELOAD=================================== */
    preload: function () {
        console.log(window);
        // Spritesheet
        game.load.spritesheet('people0', 'assets/img/sprites/people/0.png', 212,396);
        game.load.spritesheet('people1', 'assets/img/sprites/people/1.png', 212,396);
        game.load.spritesheet('people2', 'assets/img/sprites/people/2.png', 212,396);
        game.load.spritesheet('people3', 'assets/img/sprites/people/3.png', 212,396);
    },

    /* ======================================CREATE=================================== */
    create: function () {
    	// game.time.events.repeat(Phaser.Timer.SECOND * 4, addsprite, this);
    	// app.data.game.add.sprite(0,0,'people0');
    	// this.addSprite();
    	app.data.peopleGroup = game.add.group();
    	this.addPeoples();
    	game.time.events.loop(Phaser.Timer.SECOND * app.data.timePeoples, this.nextPeoples, this);

        
       
    },
    peopleSelected: function (people) {
        //app.data.score += 10;
        console.log(people.isEvil);

        if (people.isEvil === true) {
            app.data.score += 10;
            people.frame = 1;
        }else{
            app.data.score -= 10;
            people.frame = 2;
            if(app.data.score < 0){
                app.data.score = 0;
            }
        };
        app.data.scoreText.text = 'Score : '+app.data.score;
        
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
        var peopleArea       = app.data.peopleArea,
            peopleAreaWidth  = peopleArea.width,
            peopleAreaHeight = peopleArea.height,
            peopleNb         = /*Math.floor(Math.random() * 6) + 1*/ 2
            people = null,

            random_height    = 0,
            random_width     = 0;

        console.log(peopleNb);
        for(var i = 0; i<peopleNb; i++ ){
            // random_height = Math.floor((Math.random() * peopleAreaHeight) + 1);
            // random_width  = Math.floor((Math.random() * peopleAreaWidth) + 1);
            // app.data.peopleList[i] = game.add.sprite(random_height,random_width, 'people0');
            // app.data.peopleList[i] = game.add.sprite(random_height,random_width, 'people0');

            randomSprite = Math.floor((Math.random() * 4) + 0); ; 

            console.log(randomSprite);

            people = app.data.peopleGroup.create(game.world.width*.5, game.world.height-this.height, 'people'+randomSprite );
            //people = app.data.peopleGroup.create(game.world.width*.5, game.world.height-this.height, 'people0');
            people.position.y  = game.world.height-people.height;
            people.position.x  = game.world.width*.5-people.width*i;

            people.isEvil = Math.random()<.5 ? true :false; 

            console.log(people.isEvil)

            people.inputEnabled = true;

            people.input.useHandCursor = true;

            people.events.onInputDown.add(this.peopleSelected,this);

		}
		this.lastCreate = game.time.now;
	},

	nextPeoples : function(){
		console.log('hey as-tu vu les quenouilles !');
		app.data.peopleGroup.removeChildren();
		console.log(game.time.now - this.lastCreate);
		if( game.time.now - this.lastCreate > 3000){
			this.addPeoples();
			app.data.PeopleWaves++;
		}
	}

};