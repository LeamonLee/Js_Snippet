var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var urlencodedParser = bodyParser.urlencoded({extended: false});

// Connect to the database
// { useNewUrlParser: true } is an option that needs to be passed. Since the compiler says the old command is depreciated.
mongoose.connect("mongodb://Leamon:mrdl543sst@ds211143.mlab.com:11143/todoapp_db", { useNewUrlParser: true });

// Create a mongoDB Schema - This is just like a blueprint
var todoSchema = new mongoose.Schema({
    item:String
});

// The first parameter is the collection name, and the second parameter is what schema we're based on.
// model is basically collection
var TodoModel = mongoose.model("Todo1234567", todoSchema);
var testItemOne = TodoModel({item: "Buy flowers2"}).save(function(err){
    
    if(err) throw err;

    console.log("Item saved");
});


// var data = [
//     {item: "get milk"},
//     {item: "walk dog"},
//     {item: "kick some coding ass"}
// ];

module.exports = function(app){

    app.get("/todo", function(req, res){
        // Get data from mongodb and pass it to view
        // TodoModel.find({item:"Buy flowers"});    //  Find the specific item
        TodoModel.find({}, function(err, data){
            if(err) throw err;
            res.render("todo", {todos:data});
        });
        
    });

    app.post("/todo", urlencodedParser, function(req, res){
        console.log("Ajax request has been made");

        // Get data from the view and add it to mongodb
        var newTodo = TodoModel(req.body).save(function(err, data){
            if(err) throw err;
            res.json(data);
        });

        // data.push(req.body);
        // res.json(data);
    });

    app.delete("/todo/:item", function(req, res){
        // Delete the requested item from mongodb
        // remove is deprecated. Use deleteOne, deleteMany, bulkWrite indtead.
        // TodoModel.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err, data){
        //     if(err) throw err;
        //     res.json(data);
        // });

        TodoModel.find({item: req.params.item.replace(/\-/g, " ")}).deleteOne(function(err, data){
            if(err) throw err;
            res.json(data);
        });

        // data = data.filter(function(todo){
        //     return todo.item.replace(/ /g, '-') !== req.params.item;
        // });
        // res.json(data);
    });
};