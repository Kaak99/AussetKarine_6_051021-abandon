const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
const result = dotenv.config();
//const dotenv = require("dotenv").config();

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, "gggggggggggggggjkkk");
    //const decodedToken = jwt.verify(token, `${process.env.JWT_KEY_TOKEN}`);
    console.log(decodedToken);
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw 'Invalid user ID';
    } else {
      next();
    }
  } catch {
    res.status(402).json({error});
    // res.status(401).json({
    //   error: new Error('Invalid request!')
    // });
  }
};