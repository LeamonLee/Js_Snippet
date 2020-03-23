$(document).ready(function(){
    // some code to pull in my latest twitter tweet
    
    $("#contact img").removeAttr("alt");
    $("#contact img").attr("alt", "location");
    console.log($("#contact img").attr("alt"));

    /* 
    .removeAttr() removes an attribute completely
    .attr() can read or set any attribute
    */
});