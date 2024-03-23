const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("home.ejs")
})


router.get("/login",(req,res)=>{
    res.render("login.ejs")
})
router.get("/register",(req,res)=>{
    res.render("register.ejs")
})


router.get("/dash",(req,res)=>{
    res.render("dash.ejs")
})


router.get('/contact',(req,res)=>{
    res.render("cont.ejs")
})

module.exports = router;
