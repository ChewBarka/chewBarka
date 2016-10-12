var express = require('express');
var router = express.Router();
var moment = require('moment');
var year = moment().year();
var Pup = require('../../models/pup.model');
var Owner = require('../../models/owner.model');
var Medical = require('../../models/medical.model');
var Fitness = require('../../models/fitness.model');

router.route('/')
    ///////////////////////////////////////////////////////////////////////

//GET: api/pups
.get(function(req, res) {
    //Get all pups
    Pup.find(function(err, pup) {
        if (err) {
            return res.send(500, err);
        }
        res.json(pup);
    });
})

///////////////////////////////////////////////////////////////////////
//POST: api/pups
.post(function(req, res) {
    //Add pup
    var pup = new Pup();

    pup.name = req.body.name;
    pup.color = req.body.color;
    pup.size = req.body.size;
    pup.weight = req.body.weight;
    pup.allergies = req.body.allergies;
    pup.birthdate = req.body.birthdate;
    // pup.age = moment().diff(pup.birthdate, 'years');
     if (moment().diff(pup.birthdate, 'years') < 1) {
        pup.age = moment().diff(pup.birthdate, 'months') + " mth(s)";
    } if(moment().diff(pup.birthdate, 'years') > 1) {
        pup.age = moment().diff(pup.birthdate, 'years') + " yr(s)";
    }
    pup.medConditions = req.body.medConditions;
    pup.chipInformation = req.body.chipInformation;
    pup.picture = req.body.picture;
    pup.morePictures = req.body.morePictures;
    pup.createdAt = req.body.createdAt;

    pup.save(function(err, pup) {
        if (err) {
            return res.send(500, err);
        }
        return res.json(pup);
    });
});

///////////////////////////////////////////////////////////////////////
router.route('/:id')

//GET: api/pup/1 * And populate the owner/med/fitness fields *
.get(function(req, res) {
        Pup.findById(req.params.id)
            .populate('owner')
            .populate('medicalRecord')
            .populate('fitness')
            .exec(function(err, pup) {
                if (err) {
                    return res.send(500, err);
                }
                res.json(pup);
            });
    })
///////////////////////////////////////////////////////////////////////
    //PUT: api/pup/1
    .put(function(req, res) {
        //Update a pup
        Pup.findById(req.params.id, function(err, pup) {
            if (err) {
                return res.send(500, err);
            }


            pup.name = req.body.name;
            pup.color = req.body.color;
            pup.size = req.body.size;
            pup.weight = req.body.weight;
            pup.allergies = req.body.allergies;
            pup.birthdate = req.body.birthdate;
            // pup.age = moment().diff(pup.birthdate, 'years');
             if (moment().diff(pup.birthdate, 'years') < 1) {
                pup.age = moment().diff(pup.birthdate, 'months') + " mth(s)";
            } if (moment().diff(pup.birthdate, 'years') > 1) {
                pup.age = moment().diff(pup.birthdate, 'years') + " yr(s)";
            }
            pup.medConditions = req.body.medConditions;
            pup.chipInformation = req.body.chipInformation;
            pup.picture = req.body.picture;
            pup.morePictures = req.body.morePictures;
            pup.createdAt = req.body.createdAt;

            pup.save(function(err, pup) {
                if (err) {
                    return res.send(500, err);
                }
                res.json(200);
            });
        });
    })

///////////////////////////////////////////////////////////////////////
//DELETE: api/pup/1
.delete(function(req, res) {
    //Delete a pup
    Pup.remove({ _id: req.params.id }, function(err, pup) {
        if (err) {
            return res.send(500);
        }
        res.json(pup);
    });
});

///////////////////////////////////////////////////////////////////////
router.route('/:id/medical').post(function(req, res) {
    //Add Medical
    var medical = new Medical();

        medical.rabies = req.body.rabies;
        medical.lepto = req.body.lepto;
        medical.dhpp = req.body.dhpp;
        medical.bordetella = req.body.bordetella;
        medical.chipInfo = req.body.chipInfo;
        medical.heartWorm = req.body.heartWorm;
        medical.fleaPrevention = req.body.fleaPrevention;
        medical.fecal = req.body.fecal;
        medical.bloodUrine = req.body.bloodUrine;
        medical.nextVisit = req.body.nextVisit;
        medical.dentalExam = req.body.dentalExam;
        medical.rattleSnakeTraining = req.body.rattleSnakeTraining;
        medical.medications = req.body.medications;
        medical.pup = req.params.id;

    medical.save(function(err, medical) {
        if (err) {
            return res.send(500, err);
        }

        Pup.findById(req.params.id, function(err, pup) {
            if(err) {
                return res.send(500, err);
            }

            pup.medicalRecord.push(medical.id);

            pup.save(function(err, pup) {
                res.json(medical);
            });
        });
    });
});

///////////////////////////////////////////////////////////////////////
router.route('/:id/fitness').post(function(req, res) {
    //Add fitness
    var fitness = new Fitness();

    fitness.date = req.body.date;
    fitness.notes = req.body.notes;
    fitness.pup = req.params.id;

    fitness.save(function(err, fitness) {
        if (err) {
            return res.send(500, err);
        }

        Pup.findById(req.params.id, function(err, pup) {
            if(err) {
                return res.send(500, err);
            }

            pup.fitness.push(fitness.id);

            pup.save(function(err, pup) {
                res.json(fitness);
            });
        });
    });
});
///////////////////////////////////////////////////////////////////////
module.exports = router;
