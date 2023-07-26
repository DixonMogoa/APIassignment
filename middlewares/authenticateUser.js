// middlewares/authenticateUser.js

const jwt = require('jsonwebtoken');
const secretKey = 'secret'; // Same as used in userController

const authenticateUser = (req, res, next) => {
  // ... implement the JWT authentication logic ...
  const token=req.headers.authorization;
//check if the authorization header is present
    if(!token){
        return res.status(401).json({message:'No token was provided'});
    }
    try{
        //verify token
        const decoded=jwt.verify(token,JWT_SECRET);
        req.user=decoded;
        next();
    }catch(err){
        return res.status(401).json({message:'Invlaid token'});
    }
};

module.exports = authenticateUser;
