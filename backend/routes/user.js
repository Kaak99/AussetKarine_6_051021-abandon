//import

const express = require("express");
//console.log(express);

const router = express.Router();
//console.log(router);

const userController = require('../controllers/user');
//console.log(userController);





//route signup
router.post('/signup', userController.signup);

//route login
//router.post('/login', userController.login);


//export
module.exports = router;