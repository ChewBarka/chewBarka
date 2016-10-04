/******************* Mongoose Configuration ***********************/
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/chewBarka');
/******************* Express Configuration ************************/
var express = require('express');
var bodyParser = require('body-parser');

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
var apiRouter = express.Router();

// http://localhost:3000/
apiRouter.use('/pups', pupRoute);
apiRouter.use('/owners', ownerRoute);
apiRouter.use('/medical', medicalRoute);
apiRouter.use('/family', familyRoute);
apiRouter.use('/fitness', fitnessRoute);
apiRouter.use('/pupFitness', pupFitnessRoute);
apiRouter.use('/todo', todoRoute);
apiRouter.use('/ownerTodo', ownerTodoRoute);


app.use(apiRouter);

app.listen(3000, function(){
	console.log('Listening on port 3000');
});