var express = require('express');
var router = express.Router();
var Drink = require('../models/drinks');


//get all
router.get('/drinks', function(req, res, next){
  Drink.find(function(err, data){
    if (err) {
      res.json({'message': err});
    } else {
      res.json(data);
    }
  });
});

//get one
router.get('/drink/:id', function(req, res, next){
  Drink.find(req.params.id, function(err, data){
    if (err) {
      res.json({"message": err});
    } else {
      res.json({"success": data});
    }
  });
});

//post
router.post('/drinks', function(req, res, next) {
  newDrink = new Drink({
    name: req.body.name,
    type: req.body.type
  });
  newDrink.save(function(err, data){
    if(err){
      res.json({'ERROR': err});
    } else {
      res.json({"success": data});
    }
  });
});


//put
router.put('/drink/:id', function(req, res, next){
  var update = {
    name: req.body.name,
    type: req.body.type
  };
  Drink.findByIdAndUpdate(req.params.id, update, function(err, data){
    if(err){
      res.json({'message': err});
    } else {
      res.json({"success": data});
    }
  });
});

//delete
router.delete('/drink/:id', function(req, res, next){
  Drink.findByIdAndRemove(req.params.id, function(err, data){
    if(err){
      res.json({'message': err});
    } else {
      res.json({"deleted": data});
    }
  });
});



module.exports = router;
