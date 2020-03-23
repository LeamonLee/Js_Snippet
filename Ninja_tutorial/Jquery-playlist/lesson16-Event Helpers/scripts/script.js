$(document).ready(function(){
    // some code to pull in my latest twitter tweet
    
    var myLis = $("#points-of-sale li");
    myLis.click(function(){
        $(this).css({"background": "pink"});
        myLis.off("click");
    });

    /* 
    .on() - binds an event to matched element(s)
    .off() - unbinds event from matched element(s)
    */
});