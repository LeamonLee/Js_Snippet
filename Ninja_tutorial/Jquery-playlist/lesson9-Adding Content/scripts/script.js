$(document).ready(function(){
    // some code to pull in my latest twitter tweet
    var tweet = "<div style='margin:20px 0; padding:10px; background:#eee;'>The big fight live:</div>"

    // $("#tweets div").append(tweet);
    // $("#tweets div").prepend(tweet);
    // $("#tweets div p").before(tweet);
    // $("#tweets div p").after(tweet);
    // $("#tweets div").html(tweet);
    $("#tweets div p").text(tweet);

    /* Adding & Changing content
    .append()   adds content to bottom of the element
    .prepend()  adds content to top of the element
    .before()   adds content before element
    .after()    adds content after element
    .html()     changes the whole html of the element
    .text()     changes the text of an element

    */
});