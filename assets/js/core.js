app.core = {
    /* ======================================PRELOAD=================================== */
    preload: function () {
        app.core.people.preload();
    },

    /* ======================================CREATE=================================== */
    create: function () {
       app.core.people.create();
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