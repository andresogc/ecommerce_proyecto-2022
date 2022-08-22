
const {findByEmail,update, findOne} = require('./user.service');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {config} = require('./../config/config');
const nodemailer = require('nodemailer');

const getUser = async (email,password)=>{
    const user = await findByEmail(username);
    if(!user){
        throw boom.unauthorized();
    }

    const isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch){
        throw boom.unauthorized();
    }
    delete user.dataValues.password;
    return user;
}

const signToken = async (user)=>{
    const payload = {
        sub:user.id,
        role:user.role
    }
    const token = jwt.sign(payload,config.jwtSecret);
    return ({
        user,
        token
    });
}

const sendRecovery = async()=>{
    const user = await findByEmail(email);
    if(!user){
        throw boom.unauthorized();
    }
    const payload = {sub:user.id};
    const token = jwt.sign(payload,config.jwtSecret,{expiresIn:'15min'});
    const link = `http://myfrontend.com/recovery?token=${token}`;
    await update(user.id,{recoveryToken:token});
    const mail = {
        from:config.smtpEmail, //sender address
        to:`${user.email}`,//list of receivers
        subject:'Email para recuperar contraseña',//subject line
        //text:'hola',//plain text body
        html: `<b>Ingresa a este link ${link},para recuperar la contraseña!!</b>`//html body
    }

    const rta = await sendMail(mail);
    return rta;

}

const changePassword = async(token,newPassword)=>{
    try {
        const payload = jwt.verify(token,config.jwtSecret);
        const user = await findOne(payload.sub);
        if (user.recoveryToken !== token) {
            throw boom.unauthorized();    
        }
        const hash = await bcrypt.hash(newPassword,7);
        await update(user.id,{recoveryToken:null,password:hash});
        return {message:'password changed'};
    } catch (error) {
        throw boom.unauthorized();
    }
}
const sendMail = async (infoMail)=>{
    
    const transporter = nodemailer.createTransport({
        host:'smtp.gmail.com',
        secure: true, //true for 465,false for other ports
        prompt: 465,
        auth:{
            user: config.smtpEmail,
            pass: config.smtpPassword
        }
    });

    await transporter.sendMail(infoMail);
    return {message:'mail sent'};
}


module.exports = {getUser,signToken,sendRecovery,changePassword};