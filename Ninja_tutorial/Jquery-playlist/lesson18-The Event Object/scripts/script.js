$(document).ready(function(){
    // some code to pull in my latest twitter tweet
    
    $("*").on("click", function(e){
        console.log(e.target);
        console.log("The type of event is: " + e.type);
        console.log("X co-ordinate of the event is: " + e.pageX);
        console.log("Y co-ordinate of the event is: " + e.pageY);
        e.stopPropagation();
    });
});