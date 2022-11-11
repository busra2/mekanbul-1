var express = require('express');
var router = express.Router();
module.exports.index= function(req,res,next){
    res.render('index',{'title':'Express'});
}
module.exports=router;