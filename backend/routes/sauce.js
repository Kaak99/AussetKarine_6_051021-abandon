// tests (à retirer)
console.log(` --------> sauce-route`);

//-----imports-----//

const express = require("express");
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const sauceController = require('../controllers/sauce');


//-----routes-----//

//route affichage de toutes les sauces (getall)//
router.get('/', auth, sauceController.getAllSauces);

//route affichage d'une sauce (getOne)// 
router.get('/:id', auth, sauceController.getOneSauce);

//--route création d'une sauce--// 
router.post('/', auth, multer, sauceController.createSauce);//multer ici

//route suppression d'une sauce//
router.delete('/:id', auth, sauceController.deleteSauce);

//route modification d'une sauce// 
router.put('/:id', auth, multer, sauceController.modifySauce);//multer ici

//route like d'une sauce// 
//route dislike d'une sauce//



//-----exports-----//
module.exports = router;