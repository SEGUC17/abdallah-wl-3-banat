var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
var passport = require('passport');
var mongoose = require('mongoose');
var config = require('./config/database');
const port = 8080;

var b = require('./models/business');



mongoose.connect(config.database);
mongoose.connection.on('connected',function(){
 
})

var app = express();

var guests = require('./routes/guests');
var clients = require('./routes/clients');
var bproviders = require('./routes/bproviders');
var admins = require('./routes/admins');



app.use(cors());

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());


app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);


app.use('/clients',clients);
app.use('/',guests);
app.use('/admins',admins);
app.use('/bproviders',bproviders);

app.get('*',function(req,res){
  res.send("Invalid Endpoint");
});

app.listen(port,function(){
 
})
