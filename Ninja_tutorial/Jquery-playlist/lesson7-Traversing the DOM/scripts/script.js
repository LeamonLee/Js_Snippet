$(document).ready(function(){
    // next
    // $("#contact-methods").next().css({border:"3px solid yellow"});

    // prev
    $("#social-nav").prev().css({border:"3px solid red"});

    // parent
    $(".banner-title").parent().css({border:"3px solid pink"});

    // parents
    $(".banner-title").parents().css({border:"3px solid pink"});

    // children
    // $("#social-nav").children().css({border:"3px solid green"});

    // find
    // it's pretty much the same as $("#contact .facebook") but the find method is quicker.
    $("#contact").find(".facebook").css({border:"3px solid purple"});

    // closest
    $("#social-nav").closest(".wrapper").css({border:"3px solid orange"});

});