var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var photosSchema = new Schema({

    picture: {
        type: Schema.Types.Mixed,
        required: true
    },
    morePictures: {
        type: Schema.Types.Mixed,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});

// Sets the createdAt parameter equal to the current time
photosSchema.pre('save', function(next) {
    now = new Date();
    if (!this.createdAt) {
        this.createdAt = now;
    }
    next();
});

module.exports = mongoose.model('photos', photosSchema);
