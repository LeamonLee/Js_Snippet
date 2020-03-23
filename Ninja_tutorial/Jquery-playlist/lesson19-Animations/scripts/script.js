$(document).ready(function(){
    // some code to pull in my latest twitter tweet
    
    $("section > h2").on("click", function(){
        // $(this).css({"height":"100px", "width":"500px"});

        // The second parameter is duration time. By default is 400ms.
        // The third parameter is either "swing" or "linear". By default is swing
        // The fourth parameter is the callback function
        $(this).animate({"height":"100px", "width":"500px"}, 1000, "linear", function(){
            alert("animation completed");
        });
    });
});