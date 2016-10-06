var express = require ('express');
var router = express.Router();
var Medical = require('../../models/medical.model');

router.route('/')
///////////////////////////////////////////////////////////////////////

      //GET: api/medical
      .get(function(req, res){
        //Get all owners
        Medical.find(function(err, medical) {
            if(err) {
                return res.send(500, err);
            }
            res.json(medical);
        });
      })

///////////////////////////////////////////////////////////////////////
      //POST: api/owners
      .post(function(req, res){
        //Add owner
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


        medical.save(function(err, medical){
            if(err) {
                return res.send(500,err);
            }
            return res.json(medical);
        });
      });

router.route('/:id')
///////////////////////////////////////////////////////////////////////

      //GET: api/medical/1 
      .get(function(req, res){
        Medical.findById(req.params.id)
             .populate('pup')
             .exec(function(err, medical) {
                if(err) {
                    return res.send(500, err);
                }
                res.json(medical);
             });
      })

///////////////////////////////////////////////////////////////////////
      //PUT: api/med/1
      .put(function(req, res){
        //Update a med
        Medical.findById(req.params.id, function(err, medical) {
            if(err) {
                return res.send(500, err);
            }

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

        medical.save(function(err, medical) {
            if(err) {
                return res.send(500, err);
            }
            res.json(200);
            });
         });
      })
///////////////////////////////////////////////////////////////////////
      //DELETE: api/med/1
      .delete(function(req, res){
        //Delete a med
        Medical.remove({_id: req.params.id}, function(err, medical) {
            if(err) {
                return res.send(500);
            }
            res.json(medical);
        });
      });

///////////////////////////////////////////////////////////////////////
module.exports = router;