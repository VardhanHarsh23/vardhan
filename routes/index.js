var express = require('express');
var router = express.Router();

/* GET home page. */
router.route('/')
.get((req,res)=>{
    res.statusCode=200;
    // res.setHeader('Content-Type', 'text/html');
    // res.sendFile(path.join(__dirname+"../views/index.html"))
    res.render('index');
});
// .get("/contact", (req,res)=>{
//     res.sendFile(path.join(__dirname+"../public/contact.html"))
// })
// .get("/resume", (req,res)=>{
//     res.sendFile(path.join(__dirname+"../public/resume.html"))
// })
// .get("/project", (req,res)=>{
//     res.sendFile(path.join(__dirname+"../public/project.html"))
// });


module.exports = router;
