const router = require("express").Router();
const verify = require('./verifyToken');
const User = require('../model/User');

router.get('/',verify , async (req,res)=>{
    const userData = await User.findById(req.user._id);
    const {name, email, password} = userData;
    res.send({name: name, email: email, password: password});

});
module.exports = router;
