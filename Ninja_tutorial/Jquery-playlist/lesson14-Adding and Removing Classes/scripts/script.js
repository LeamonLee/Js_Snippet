$(document).ready(function(){
    // some code to pull in my latest twitter tweet
    
    // $("header .wrapper").removeClass("wrapper");
    // $("header > div").addClass("wrapper");

    var button = $("#lead-banner a");
    button[0].onclick = function(){
        $("#points-of-sale").toggleClass("open");
        return false;   // disable the default behavior because we don't want to go anywhere when we click it.
    }

    /* 
    removeClass() - removes a class from the matched element(s)
    addClass() - adds a class to the matched element(s)
    toggleClass() - toggles the class on and off on the matched element(s)
    */
});