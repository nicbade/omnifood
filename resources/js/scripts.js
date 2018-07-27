$(document).ready(function() {

    $('.js--section-features').waypoint(function(direction) {
        if(direction == "down") {
            $('nav').addClass('sticky'); 
        } else {
            $('nav').removeClass('sticky');
        }
     }, {
            offset: '60px'
    });
    // this detects if the scroll is going upward or downward

    // var waypoints = $('#handler-first').waypoint(function(direction) {
    //     notify(this.element.id + ' hit 25% from top of window') 
    //   }, {
    //     offset: '25%'
    //   })

});