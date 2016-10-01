/******************* Mongoose Configuration ***********************/
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/chewBarka');



/******************* Express Configuration ************************/
var express = require('express');
var bodyParser = require('body-parser');

var pupRoute = require('./routes/pup.route');
var ownerRoute = require('./routes/owner.route');
var medicalRoute = require('./routes/medical.route');
var familyRoute = require('./routes/family.route');
var pupHealthRoute = require('./routes/pupHealth.route');

var app = express();
app.use(bodyParser.json());

var apiRouter = express.Router();

// http://localhost:8080/
apiRouter.use('/pups', pupRoute);
apiRouter.use('/owners', ownerRoute);
apiRouter.use('/medical', medicalRoute);
apiRouter.use('/family', familyRoute);
apiRouter.use('/pupHealth', pupHealthRoute);

app.use(apiRouter);

app.listen(8080, function(){
	console.log('Listening on port 8080');
});