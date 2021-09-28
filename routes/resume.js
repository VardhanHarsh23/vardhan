var express = require('express');
var router = express.Router();

/* GET home page. */
router.route('/')
.get((req,res)=>{
    res.statusCode=200;
    
    res.render('resume');
});
module.exports = router;