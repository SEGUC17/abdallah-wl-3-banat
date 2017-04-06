var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
var passport = require('passport');
var mongoose = require('mongoose');
var config = require('./config/database');


var bp = require('./models/business');

  var magoud = bp({
        bproviderid:'58e683f39f8f5512c776f4cc',
        businessName:'koko',
        location:'koko',
        phone:123,
        ratingsGiven:[],
        rating:10,
        announcements:[],
        reviews:[],
        description:'anamagoudanafries',
        profilepicture:'anafries',
        info:'ana dummy',
        questions:[{question:'koko',answer:''}],
        isApproved:true,
        services:[]
    })

const port = 8080;

mongoose.connect(config.database);
mongoose.connection.on('connected',function(){
  console.log('Connected to database');
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
  console.log("Server started on "+port);
})
