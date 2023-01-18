/* eslint-disable no-console */
var { Produits } = require('../models/produitsModel');
var ObjectID = require( 'mongoose'). Types.ObjectId;
 
exports.index = (req, res ) => {
    Produits.find((err, docs) => {
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
    const restaurant = req.body.restaurant;
    const prix = req.body.prix;
    const nom = req.body.nom;
    const description = req.body.description;
    const img = req.body.img;
  const newResto = new Produits({restaurant: restaurant, prix: prix, nom: nom, description: description, img: img});
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
 
Produits.findByIdAndUpdate(id, {$set: newResto},{new: true},(err,docs )=>{
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
 
Produits.findByIdAndRemove(id, (err, docs) => {
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