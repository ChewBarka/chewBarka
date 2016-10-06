/******************* Mongoose Configuration ***********************/
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/chewBarka');

db.on('error', console.error.bind(console, 'connection error'));
/******************* Express Configuration ************************/
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
// use sessions for tracking logins


var pupRoute = require('./routes/pup/pup.route');
var ownerRoute = require('./routes/owner/owner.route');
var medicalRoute = require('./routes/pup/medical.route');
var familyRoute = require('./routes/owner/family.route');
var fitnessRoute = require('./routes/pup/fitness.route');
var pupFitnessRoute = require('./routes/pup/pupFitness.route');
var todoRoute = require('./routes/owner/todo.route');
var ownerTodoRoute = require('./routes/owner/ownerTodo.route');

var app = express();
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(session({
	secret: 'Chew bark bark',
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
apiRouter.use('/family', familyRoute);
apiRouter.use('/fitness', fitnessRoute);
apiRouter.use('/pupFitness', pupFitnessRoute);
apiRouter.use('/todo', todoRoute);
apiRouter.use('/ownerTodo', ownerTodoRoute);

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
	res.render('error', {
		message: err.message,
		error: {}
	});
});

// http://localhost:3000/
app.listen(3000, function(){
	console.log('Listening on port 3000');
});