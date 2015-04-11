app.core.people = {
    /* ======================================PRELOAD=================================== */
    preload: function () {
        console.log(window);
        // Spritesheet
        game.load.spritesheet('people0', 'assets/img/sprites/people/0.png', 483,760);
        game.load.spritesheet('people1', 'assets/img/sprites/people/1.png', 486,821);
        game.load.spritesheet('people2', 'assets/img/sprites/people/2.png', 437,709);
        game.load.spritesheet('people3', 'assets/img/sprites/people/3.png', 484,766);
        game.load.spritesheet('people4', 'assets/img/sprites/people/4.png', 539,694);
        game.load.spritesheet('people5', 'assets/img/sprites/people/5.png', 524,413);
        game.load.spritesheet('people6', 'assets/img/sprites/people/6.png', 499,852);
        game.load.spritesheet('people7', 'assets/img/sprites/people/7.png', 609,825);
        game.load.spritesheet('people8', 'assets/img/sprites/people/8.png', 561,790);
        game.load.spritesheet('people9', 'assets/img/sprites/people/9.png', 792,785);
        game.load.spritesheet('people10', 'assets/img/sprites/people/10.png', 637,1012);
        game.load.spritesheet('people11', 'assets/img/sprites/people/11.png', 604,1068);
    },

    /* ======================================CREATE=================================== */
    create: function () {
    	// game.time.events.repeat(Phaser.Timer.SECOND * 4, addsprite, this);
    	// app.data.game.add.sprite(0,0,'people0');
    	// this.addSprite();
    	app.data.peopleGroup = game.add.group();
    	this.addPeoples();
    	game.time.events.loop(Phaser.Timer.SECOND * app.data.timePeoples, this.nextPeoples, this);

        app.data.player.hp == 3

        console.log("player hp"+app.data.player.hp);

        
       
    },
    peopleSelected: function (people) {
        //app.data.score += 10;
        //console.log(people.isEvil);
        //console.log("player hp"+player.hp);
        if (people.isEvil === true) {
            app.data.score += 10;
            people.frame = 1;

        }else{
            if (app.data.player.hp == 1) {
                game.state.start('menu');
            };
            app.data.player.hp -= 1;
            //app.data.score -= 10;
            people.frame = 2;
            if(app.data.score < 0){
                app.data.score = 0;
            }
        };
        people.inputEnabled = false;

        this.updateScore;

        people.destroy();


    },
    /* ======================================UPDATE=================================== */
    update: function () {
        this.updateScore;
        
    	if(game.time.now - this.lastCreate > 1000){
    		console.log('toto');
    		app.data.peopleGroup.forEach(function(people) {
    			// if(animPersonality)
    			people.isEvil ? people.animations.play('bad') : people.animations.play('good');
    		});
    	}
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

            randomSpritePrev = Math.floor((Math.random() * 7) ); 
            randomSpriteNext = Math.floor((Math.random() * 7) ); 

        for(var i = 0; i<peopleNb; i++ ){
            // random_height = Math.floor((Math.random() * peopleAreaHeight) + 1);
            // random_width  = Math.floor((Math.random() * peopleAreaWidth) + 1);
            // app.data.peopleList[i] = game.add.sprite(random_height,random_width, 'people0');
            // app.data.peopleList[i] = game.add.sprite(random_height,random_width, 'people0');
            //console.log(randomSprite);

            if (i == 0) {

                people = app.data.peopleGroup.create(game.world.width*.5, game.world.height-this.height, 'people'+randomSpritePrev );

            }else {
                if (randomSpritePrev == randomSpriteNext) {

                    randomSpriteNext = Math.floor((Math.random() * 7) );

                };
                people = app.data.peopleGroup.create(game.world.width*.5, game.world.height-this.height, 'people'+randomSpriteNext );

            };

            
            //people = app.data.peopleGroup.create(game.world.width*.5, game.world.height-this.height, 'people0');

   //          var scalex = (game.camera.width - people.width/4)/people.width;
			// var scaley = (game.camera.height - people.height/4)/people.height;
			// people.scale.setTo(scalex, scaley);

			// responsive size of people
			// var pHeight = game.camera.height > 360 ? game.camera.height*.5 : game.camera.height;
			var pHeight = window.innerHeight>500 ? game.camera.height/1.6 : game.camera.height/1.2;

			var pWidth = (people.width * pHeight)/people.height;

			people.width = pWidth; 
			people.height = pHeight;

			people.position.y = game.world.height-people.height;
			people.position.x = game.world.width*.5-people.width*i;

            people.animations.add('idle', [0,1,2]);
            people.animations.add('good', [3,4,5]);
            people.animations.add('bad', [6,7,8]);

            people.isEvil = Math.random()<.5 ? true :false; 

            console.log(people.isEvil)

            people.inputEnabled = true;

            people.input.useHandCursor = true;
            // play the idle
            var idleAnime = people.animations.play('idle', utils.randomIntFromInterval(4,7), true);

            people.events.onInputDown.add(this.peopleSelected,this);

		}
		this.lastCreate = game.time.now;
	},

    updateScore : function(){
        app.data.scoreText.text = 'Score : '+app.data.score;
        //app.data.scoreText.text += '</br>Hp : '+app.data.player.hp;   
        app.data.playerText.text = 'HP : '+app.data.player.hp;
    },

	nextPeoples : function(){
		console.log('hey as-tu vu les quenouilles !');

        app.data.peopleGroup.forEach(function(people) {

            if(people.isEvil){
                app.data.score -= 10;
            }
            if(app.data.score < 0){
                app.data.score = 0;
            }
        });

        

		app.data.peopleGroup.removeChildren();
        //if (app.data.peopleGroup.isEvil === true) {
         //   app.data.score -= 10;
        //}

		// console.log(game.time.now - this.lastCreate);
		if( game.time.now - this.lastCreate > 3000){
			this.addPeoples();
			app.data.peopleWaves++;
		}

        if (app.data.peopleWaves > 2){

           game.state.start('nextlvl');
            
        }
        console.log('nb waves'+app.data.peopleWaves);
	}

};