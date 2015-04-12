app.core.people = {
    /* ======================================PRELOAD=================================== */
    preload: function () {
        // Spritesheet
        game.load.spritesheet('people0', 'assets/img/sprites/people/0.png', 483,759);
        game.load.spritesheet('people1', 'assets/img/sprites/people/1.png', 486,821);
        game.load.spritesheet('people2', 'assets/img/sprites/people/2.png', 437,709);
        game.load.spritesheet('people3', 'assets/img/sprites/people/3.png', 484,766);
        game.load.spritesheet('people4', 'assets/img/sprites/people/4.png', 539,694);
        game.load.spritesheet('people5', 'assets/img/sprites/people/5.png', 519,800); // petite fille
        game.load.spritesheet('people6', 'assets/img/sprites/people/6.png', 499,852);
        game.load.spritesheet('people7', 'assets/img/sprites/people/7.png', 609,825);
        game.load.spritesheet('people8', 'assets/img/sprites/people/8.png', 561,790);
        game.load.spritesheet('people9', 'assets/img/sprites/people/9.png', 792,784);
        game.load.spritesheet('people10', 'assets/img/sprites/people/10.png', 637,1012);
        game.load.spritesheet('people11', 'assets/img/sprites/people/11.png', 604,1068);
    },

    /* ======================================CREATE=================================== */
    create: function () {
    	app.data.peopleGroup = game.add.group();
    	this.addPeoples();
    	game.time.events.loop(Phaser.Timer.SECOND * app.data.timePeoples, this.nextPeoples, this);
    },
    peopleSelected: function (people) {
        if(!people.isClicked){
        	if (people.isEvil === true) {
        		var gainedPoints = utils.randomIntFromInterval(10,20);
	            app.data.score += gainedPoints;
	            people.frame = 1;
	            // var gainedPointsText = game.add.text(game.camera.width - 220,10 , '+ ' + gainedPoints, { font: '34px Arial', fill: 'cyan' });
	            // gainedPointsText.alpha = 0;
	            // var tween = game.add.tween(gainedPointsText).to( { alpha: 1 }, 400, "Linear", true);
	        }else{
	        	console.log('clic gentil');
	            if (app.data.player.hp === 1) {
	                game.state.start('loose');
	            };
	            app.data.player.hp -= 1;
	            //app.data.score -= 10;
	            people.frame = 2;
	            if(app.data.score < 0){
	                app.data.score = 0;
	            }
	        };
        }
        people.inputEnabled = false;

        people.alpha = 1;

        var killPeople = game.add.tween(people).to( { alpha: 0 }, 400, "Linear", true);
        people.isClicked = true;

        killPeople.onComplete.add(function(){
            people.destroy()
        });

        //people.destroy();

    },
    /* ======================================UPDATE=================================== */
    update: function () {
        this.updateScore();
    	if(game.time.now - this.lastCreate > 1000){
    		app.data.peopleGroup.forEach(function(people) {
    			if(!people.isActionned){
    				// people.isEvil ? people.animations.play('bad') : people.animations.play('good');
    				if( people.isEvil === true){
    					console.log('%c BAD GUY ! ', 'background: red; font-weight:bold; padding:5px;');
    					people.animations.play('bad');
    				}else{
    					console.log('%c GOOD GUY ! ', 'background: green; font-weight:bold; padding:5px;');
    					people.animations.play('good');
    				}
    				people.isActionned=true;
    			}
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
            peopleNb         = /*Math.floor(Math.random() * 6) + 1*/ 2,
            people = null,

            random_height    = 0,
            random_width     = 0;

            randomSpritePrev = Math.floor((Math.random() * 12) ); 
            randomSpriteNext = Math.floor((Math.random() * 12) ); 

        for(var i = 0; i<peopleNb; i++ ){

            if (i == 0) {

                people = app.data.peopleGroup.create(game.world.width*.5, game.world.height-this.height, 'people'+randomSpritePrev );

            }else {
                if (randomSpritePrev == randomSpriteNext) {

                    randomSpriteNext = Math.floor((Math.random() * 12) );

                };
                people = app.data.peopleGroup.create(game.world.width*.5, game.world.height-this.height, 'people'+randomSpriteNext );

            };

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
        app.data.playerText.text = 'HP : '+app.data.player.hp;
    },

	nextPeoples : function(){
        app.data.peopleGroup.forEach(function(people) {

            if(people.isEvil && !people.isClicked){
                app.data.score -= 10;
            }
            if(app.data.score < 0){
                app.data.score = 0;
            }
            people.alpha = 1;

            var desapearAnim = game.add.tween(people).to( { alpha: 0 }, 1000, "Linear", true);

            desapearAnim.onComplete.add(function(){
                people.destroy()
            });


        });

        
		if( game.time.now - this.lastCreate > 3000){
			this.addPeoples();
			app.data.peopleWaves++;
		}

        if (app.data.peopleWaves > 2){

           // game.state.start('nextlvl');
           console.log('next lvl');
            
        }
        console.log('nb waves >>>  '+app.data.peopleWaves);
	}

};