app.core = {
    /* ======================================PRELOAD=================================== */
    preload: function () {
        app.core.people.preload();
    },

    /* ======================================CREATE=================================== */
    create: function () {
       app.core.people.create();
       app.ui.create();
    },

    /* ======================================UPDATE=================================== */
    update: function () {
    	app.core.people.update();
    },

    /* ======================================RENDER=================================== */
    render: function () {
        //Debugging
        if (app.data.enableDebugging) {
           
        }

        //Pause
        if(app.data.isPaused){
          
        }
    }
};