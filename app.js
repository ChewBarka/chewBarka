/******************* Mongoose Configuration ***********************/
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/chewBarka');



/******************* Express Configuration ************************/
var express = require('express');
var bodyParser = require('body-parser');
var ownerRoute = require('./routes/owner.route');
var pupRoute = require('./routes/pup.route');
var medicalRoute = require('./routes/medical.route');

var app = express();
app.use(bodyParser.json());

var apiRouter = express.Router();

// http://localhost:8080/
apiRouter.use('/owners', ownerRoute);
apiRouter.use('/pups', pupRoute);
apiRouter.use('/medical', medicalRoute);

app.use(apiRouter);

app.listen(8080, function(){
	console.log('Listening on port 8080');
});