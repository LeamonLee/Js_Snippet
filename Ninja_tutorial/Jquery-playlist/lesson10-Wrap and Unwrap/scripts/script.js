$(document).ready(function(){
    // some code to pull in my latest twitter tweet
    
    // $("section").wrap("<div>");
    // $("section").unwrap();
    // $("section").wrapAll("<div>");

    var wrapper = "<div class='wrapper'>";
    var button = $(".button");
    var wrapped = true;

    button[0].onclick = function(){
        if(wrapped){
            $("section").unwrap();
            wrapped = false;
            button.text("Wrap");
        }
        else{
            $("section").wrapAll(wrapper);
            wrapped = true;
            button.text("Unwrap");
        }
    }

    /* 
    wrap() -- wraps all matched elements individually
    unwrap() -- unwraps all matched elements
    wrapAll() -- wraps all elements combined with 1 single element
    */
});