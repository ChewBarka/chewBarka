var express = require ('express');
var router = express.Router();
var Photos = require('../../models/photos.model');

router.route('/')

///////////////////////////////////////////////////////
//Get the images
	.get(function(req, res) {
		Photos.find(function(err, photos) {
			if(err) {
				return res.semd(500,err);
			}
			res.json(photos);
			}
		);
	})

///////////////////////////////////////////////////////	
	
	.post(function(req,res){
		var photos = new Photos();

		photos.picture = req.body.picture;
		photos.createdAt = req.body.createdAt;
		photos.morePictures = req.body.morePictures;

		photos.save(function(err, photos) {
			if(err) {
				return res.send(500, err);
			}
			return res.json(photos);
		});
	});

module.exports = router;