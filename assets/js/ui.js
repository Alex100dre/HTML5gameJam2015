app.ui = {
      preload: function () {
        app.core.people.preload();
    },

    /* ======================================CREATE=================================== */
    create: function () {
        this.score.create();
    },

    /* ======================================UPDATE=================================== */
    update: function () {

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