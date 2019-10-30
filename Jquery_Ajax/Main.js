$(function(){                   // equals to $(document).ready(function(){});

    var $orders = $('#orders');

    $.ajax({
        type:"GET",
        url:"http://127.0.0.1:8000/api/music/",
        success:function(msg){
            // $.each(orders, function(i, order){
            //     $orders.append("<li>my order</li>");
            // });
            $orders.append("<li>" + msg + "</li>");
            console.log(msg);
        },
        error:function(xhr, ajaxOptions, thrownError){
            console.log(xhr);
            console.log(thrownError);
            
        }
    });

});