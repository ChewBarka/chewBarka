/******************* Mongoose Configuration ***********************/
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/chewBarka');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
/******************* Express Configuration ************************/
var express = require('express');
var bodyParser = require('body-parser');

var multer = require('multer');
var moment = require('moment');

// use sessions for tracking logins
//authBranch
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);


var pupRoute = require('./routes/pup/pup.route');
var ownerRoute = require('./routes/owner/owner.route');
var medicalRoute = require('./routes/pup/medical.route');
var fitnessRoute = require('./routes/pup/fitness.route');
var todoRoute = require('./routes/owner/todo.route');
var photoRoute = require('./routes/owner/photos.route');
var registerRoute = require('./routes/owner/register.route');
var loginRoute = require('./routes/owner/login.route');
// var pupFitnessRoute = require('./routes/pup/pupFitness.route');
//var ownerTodoRoute = require('./routes/owner/ownerTodo.route');
//var pupHealthRoute = require('./routes/pup/pupHealth.route');
//var familyRoute = require('./routes/owner/family.route');
//require the Twilio module and create a REST client

var accountSid = 'AC5b426d1b75984a95d899263753e1ea6f'; // Your Account SID from www.twilio.com/console
var authToken = '6f2d5c4cb05804dcb66555d464dc7f99';   // Your Auth Token from www.twilio.com/console

// var twilio = require('twilio');
// var client = new twilio.RestClient(accountSid, authToken);

// client.messages.create({
//     body: 'Hello from Node',
//     to: '+19146469449',  // Text this number
//     from: '+19143716113 ' // From a valid Twilio number
// }, function(err, message) {
//     if(err) {
//     	console.log(err.message);
//     }
// });


var app = express();
app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  next();
});

//Use Multer
var multer = require('multer');
var upload = multer({ dest: './uploads/' });


app.use(session({
	secret: 'Chew bark bark',
	cookie: {maxAge: 600},
	resave: true,
	saveUninitialized: false,
	store: new  MongoStore({
		mongooseConnection: db
	})
}));

var apiRouter = express.Router();

app.use(apiRouter);
apiRouter.use('/pups', pupRoute);
apiRouter.use('/owners', ownerRoute);
apiRouter.use('/medical', medicalRoute);
apiRouter.use('/fitness', fitnessRoute);
apiRouter.use('/todo', todoRoute);
apiRouter.use('/photos', photoRoute);
apiRouter.use('/register', registerRoute);
apiRouter.use('/login', loginRoute);
//apiRouter.use('/ownerTodo', ownerTodoRoute);
//apiRouter.use('/pupHealth', pupHealthRoute);
//apiRouter.use('/family', familyRoute);
// apiRouter.use('/pupFitness', pupFitnessRoute);
// apiRouter.use('/ownerTodo', ownerTodoRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('File Not Found');
	err.status = 404;
	next(err);
});
//error handler
//define as the last app.use callback
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.send({
		message: err.message,
		error: {}
	});
});

// http://localhost:3000/
app.listen(3000, function(){
	console.log('Listening on port 3000');
});













