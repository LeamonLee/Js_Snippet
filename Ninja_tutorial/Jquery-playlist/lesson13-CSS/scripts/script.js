$(document).ready(function(){
    // some code to pull in my latest twitter tweet
    
    console.log($("#social-nav").css("position"));
    console.log($("#social-nav").css("top"));

    // $("#social-nav").css("top", "-200px").css("left", "200px");
    $("#social-nav").css({
        "top":"-200px",
        "left":"200px",
        "opacity":"0.5",
        "border-top":"4px solid red"
    });
});