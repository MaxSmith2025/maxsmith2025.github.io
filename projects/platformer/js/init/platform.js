(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.platform = window.opspark.platform || {};
    
    let platform = window.opspark.platform;
    
    /**
     * init: This function initializes the platforms for the level.
     * 
     * GOAL: Add as many platforms necessary to make your level challenging.
     * 
     * Use the platform.create() method to create platforms for the level. 
     * 
     * platform.create() takes these arguments:
     *      
     *      platform.create(x, y, scaleX, scaleY);
     * 
     *      x: The x coordineate for the platform.
     *      y: The y coordineate for the platform.
     *      scaleX: OPTIONAL The scale factor on the x-axis, this value will 
     *              stretch the platform in width.
     *      scaleY: OPTIONAL The scale factor on the y-axis, this value will 
     *              stretch the platform in height.
     */ 
    platform.init = function (game) {
        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
       platform.create(500, 20, 2, 2);
 
        x: The x coordineate for the platform.
        y: The y coordineate for the platform.
        scaleX: OPTIONAL The scale factor on the x-axis, this value will stretch the platform in width.
        scaleY: OPTIONAL The scale factor on the y-axis, this value will stretch the platform in height.

         
        
        platform.create(0, game.world.height - 32, 3, 2);

        // example:
        platform.create(400, 460);
        platform.create(500, 200);
        platform.create(200, 300);
        platform.create(100, 100);
        platform.create(50, 500);
        
        
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    };
})(window);