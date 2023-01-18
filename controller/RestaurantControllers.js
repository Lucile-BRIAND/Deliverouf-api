/* eslint-disable no-console */
var { Restaurant } = require('../models/restoModel');
var ObjectID = require( 'mongoose'). Types.ObjectId;
 
exports.index = (req, res ) => {
    Restaurant.find((err, docs) => {
    if (!err) {
      res.send(docs)
    } else {
      res.status(500).send(err)
    }
  })
};
 
exports.searchById = (req, res) => {
  const id = req.params.id;
  res.send(`Id found : ${id}`);
}
 
exports.insert = (req, res ) => {
    const ville = req.body.ville;
    const nom = req.body.nom;
    const adresse = req.body.adresse;
    const filtre = req.body.filtre;
    const img = req.body.img;
  const newResto = new Restaurant({ville: ville, nom: nom, adresse: adresse, filtre: filtre, img: img});
newResto.save((err, docs) => {
    if (!err) {
      res.status(201).send(docs)
    } else {
      res.status(500).send(err)
    }
  });
}
 
exports.update = (req, res) => {
  const id = req.params.id;
  console.log(`update with given id: ${id}`);
 
  if(!ObjectID.isValid(id)){
    return res.send(400).send(`No record with given id: ${id}`)
  }
 
  const villeItem = req.body.ville;
  const newResto = {
    todo: todoItem
  };
 
Restaurant.findByIdAndUpdate(id, {$set: newResto},{new: true},(err,docs )=>{
    if(!err){
      res.status(200).send(docs)
    } else {
      console.log('Error while updating the data' + JSON.stringify(err, undefined, 2))
    }
  })
}
 
exports.delete = (req, res ) => {
  const id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.send(400).send(`No record with given id: ${id}`)
  }
 
Restaurant.findByIdAndRemove(id, (err, docs) => {
    const result = {
      data: docs,
      message: 'Ville has been removed successfully.',
      status: 200,
    }
 
    if (!err) {
      res.status(200).send(result)
    } else {
      res.status(500).send(err)
    }
  })
}