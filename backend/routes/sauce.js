//-----imports-----//

const express = require("express");
//console.log(express);

const sauceController = require('../controllers/sauce');

const router = express.Router();
//console.log(router);


//-----routes-----//

//route affichage de toutes les sauces//
router.get('/', sauceController.getAllSauces);

//route affichage d'une sauce// 
router.get('/:id', sauceController.getOneSauce);

//--route création d'une sauce--// 
router.post('/', sauceController.createSauce);

//route suppression d'une sauce//
//router.delete('/:id', sauceController.deleteSauce);

//route modification d'une sauce// 
//router.put('/:id', sauceController.modifySauce);

//route like d'une sauce// 
//route dislike d'une sauce//





//-----exports-----//
module.exports = router;