const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const redis = require('redis');

// Create Redis Client
// By default redis.createClient() will use 127.0.0.1 and port 6379.
// let client = redis.createClient();
const rds_port = 6379;
const rds_host = "10.101.100.97";
// let client = redis.createClient(rds_port, rds_host);
const redisConf =  {
    host: '10.101.100.97', // The redis's server ip 
    port: 6379
    //pass: 'theredispass'
    };
let rds_client = redis.createClient(redisConf);


rds_client.on('connect', function(){
    console.log('Connected to Redis...');
    
    // Select database number
    rds_client.select(1, function(err,res){
        if(err)
            console.log(err);
        console.log("Select db 1 successfully.")
        rds_client.set('key', 'string'); // this will be posted to database 1 rather than db 0
    });

    // Method2: use configure method to specify database in different mode.
    // app.configure('development', function(){
    //     // development options go here
    //     app.set('redisdb', 1);
    // });
    
    // app.configure('production', function(){
    // // production options here
    // app.set('redisdb', 0);
    // });
});

// Set Port
const port = 3000;
// Init app
const app = express();

// View Engine\
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

// body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// methodOverride
app.use(methodOverride('_method'));

// Search Page
app.get('/', function(req, res, next){
    res.render('searchusers');
});

// Search processing
app.post('/user/search', function(req, res, next){
    let id = req.body.id;

    rds_client.hgetall(id, function(err, obj){
        if(!obj){
        res.render('searchusers', {
            error: 'User does not exist'
        });
        } else {
        obj.id = id;
        res.render('details', {
            user: obj
        });
        }
    });
});

// Add User Page
app.get('/user/add', function(req, res, next){
    res.render('adduser');
});

// Process Add User Page
app.post('/user/add', function(req, res, next){
    let id = req.body.id;
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let email = req.body.email;
    let phone = req.body.phone;

    rds_client.hmset(id, [
        'first_name', first_name,
        'last_name', last_name,
        'email', email,
        'phone', phone
    ], function(err, reply){
        if(err){
        console.log(err);
        }
        console.log(reply);
        res.redirect('/');
    });
});

// Delete User
app.delete('/user/delete/:id', function(req, res, next){
    rds_client.del(req.params.id);
    res.redirect('/');
});

app.listen(port, function(){
    console.log('Server started on port '+port);
});