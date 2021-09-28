var express = require('express');
const bodyparser=require('body-parser');
var mongoose=require('mongoose');


const Contacts=require('../model/conmod');
feedRouter=express.Router();
feedRouter.use(bodyparser.json());
feedRouter.route('/')
.post((req,res)=>{
    Contacts.create(req.body)
    .then((contact)=>{
        console.log('Contact created', contact)
        res.statusCode=200;
        res.setHeader("content-Type", 'application/json');
        res.json(contact);
        
    },(err)=>next(err))
    .catch((err)=>next(err));
});

module.exports = feedRouter;