//-----imports-----//

const express = require("express");
//console.log(express);

const userController = require('../controllers/user');
//console.log(userController);

const router = express.Router();
//console.log(router);


//-----routes-----//

//-route signup-//
router.post('/signup', userController.signup);

//-route login-//
router.post('/login', userController.login);


//-----exports-----//
module.exports = router;