/* eslint-disable no-console */
var { Commande } = require('../models/commandeModel');
var ObjectID = require( 'mongoose'). Types.ObjectId;
 
exports.index = (req, res ) => {
    Commande.find((err, docs) => {
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
    const prixCommande = req.body.prixCommande;
    const frais = req.body.frais;
    const prixTot = req.body.prixTot;
    const produits = req.body.produits;
    const numCommande= req.body.numCommande;
  const newResto = new Commande({restaurant: restaurant, prixCommande: prixCommande, frais: frais, prixTot: prixTot, produits: produits, numCommande: numCommande});
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
 
Commande.findByIdAndUpdate(id, {$set: newResto},{new: true},(err,docs )=>{
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
 
Commande.findByIdAndRemove(id, (err, docs) => {
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