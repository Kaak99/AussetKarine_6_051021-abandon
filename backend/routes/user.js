// tests (à retirer)
console.log(` --------> user-route`);

//-----imports-----//

const express = require("express");
const router = express.Router();

const userController = require('../controllers/user'); //attention userCtrl!


//-----routes-----//

//-route signup-//
router.post('/signup', userController.signup);

//-route login-//
router.post('/login', userController.login);


//-----exports-----//
module.exports = router;