var express = require('express');
var router = express.Router();
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
    pup.age = req.body.age;
    pup.color = req.body.color;
    pup.size = req.body.size;
    pup.weight = req.body.weight;
    pup.allergies = req.body.allergies;
    pup.birthdate = req.body.birthdate;
    pup.medConditions = req.body.medConditions;
    pup.chipInformation = req.body.chipInformation;

    pup.save(function(err, pup) {
        if (err) {
            return res.send(500, err);
        }
        return res.json(pup);
    });
});

///////////////////////////////////////////////////////////////////////
router.route('/:id')
    // Add a medRecord to a pup
    .post(function(req, res) {
        Pup.findById(req.params.id, function(err, pup) {
            //Add medRecord

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

                medical.pup = pup;
                pup.medicalRecord.push(medical);

                medical.save().then(
                    function(medical) {
                        pup.save().then(
                            function(dog) {
                                res.json(medical);
                            }
                        );
                    }
                );
        });

    })
///////////////////////////////////////////////////////////////////////
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
            pup.age = req.body.age;
            pup.color = req.body.color;
            pup.size = req.body.size;
            pup.weight = req.body.weight;
            pup.allergies = req.body.allergies;
            pup.birthdate = req.body.birthdate;
            pup.medConditions = req.body.medConditions;
            pup.chipInformation = req.body.chipInformation;

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
module.exports = router;
