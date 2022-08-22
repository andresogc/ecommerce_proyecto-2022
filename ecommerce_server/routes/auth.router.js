const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const {signToken,sendRecovery,changePassword} = require('./../services/auth.service');

const router = express.Router();



router.post('/login',passport.authenticate('local',{session:false}), async (req,res,next)=>{
    try {
        const user = req.user;
        res.json(signToken(user))
    } catch (error) {
        next(error);        
    }
});

router.post('/recovery', async (req,res,next)=>{
    try {
        const {email} = req.body;
        const rta = await sendRecovery(email);
        res.json(rta);
    } catch (error) {
        next(error);        
    }
});

router.post('/change-password', async (req,res,next)=>{
    try {
        const {token,newPassword} = req.body;
        const rta = await changePassword(token,newPassword);
        res.json(rta);
    } catch (error) {
        next(error);        
    }
});




module.exports = router;