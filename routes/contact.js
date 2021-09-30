var express = require('express');
const bodyparser=require('body-parser');
var mongoose=require('mongoose');

const Contacts=require('../model/conmod');
var router = express.Router();
router.use(bodyparser.json());
/* GET home page. */
router.route('/')
.get((req,res,next)=>{
    res.statusCode=200;
    res.render('contact');
    // next();
})
.post((req,res)=>{
    Contacts.create(req.body)
    .then((contact)=>{
        console.log('Contact created', contact)
        res.statusCode=200;
        res.setHeader("content-Type", 'application/json');
        res.json(contact);
        
    });
});
module.exports = router;