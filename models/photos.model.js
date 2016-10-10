var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var photosSchema = new Schema({

	image: { 
    type: String, 
    default: ''
	}
});

module.exports = mongoose.model('photos', photosSchema);