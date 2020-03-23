$(document).ready(function(){
    // some code to pull in my latest twitter tweet
    
    $("section > h2").on("click", function(){
        // $(this).fadeOut();
        // $(this).fadeOut().fadeIn();
        // $(this).fadeOut(2000).fadeIn(500);
        // $(this).fadeTo(1000, 0.3);
        // $(this).fadeTo(1000, 0.3).fadeTo(1000,0.8);

        $(this).fadeTo(200, 0.3).
                fadeTo(200,0.8).
                fadeTo(200, 0.3).
                fadeTo(200,0.8).
                fadeTo(200, 0.3).
                fadeTo(200,0.8);

    });
});