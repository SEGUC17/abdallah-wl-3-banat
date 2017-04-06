var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
var passport = require('passport');
var mongoose = require('mongoose');
var config = require('./config/database');
const port = 8080;

var user = require('./models/user');
var u = user({
	username:'Hamada',
	password:'1234',
	type:0
});
u.save((err,res)=>{

});

u1 = user({
	username:'Megz',
	password:'1111',
	type:1
});
u1.save((err,res)=>{

});

var bprovider = require('./models/bprovider');
var b = bprovider({
	uid:'58e61ecb14dab3196dd0702d',
	email:'magdy@gmail.com'
})
b.save((err,res)=>{

});

var business = require('./models/business');
var bs = business({
	bproviderid:'58e61f45d4542519d8da59d2',
	businessName:'HITegypt',
	location:'Heliopolis Club',
	phone:01009591203,
	description:'Crossfit Box',
	services:[{name:'WeightLoss',description:'Tonning program',price:20}]
});
bs.save((err,res)=>{

});


var client = require('./models/client');
var c = client({
	uid:'58e61ecb14dab3196dd0702c',
	firstname:'Mohamad',
	lastname:'Tarek',
	email:'miko_1996@hotmail.com',
	address:'4567',
	creditcardinfo:'info',
	birthdate:'12/12/96'
});
c.save((err,res)=>{

});

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
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({ extended: true }));




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
