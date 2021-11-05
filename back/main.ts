
import { Request, Response, Application } from "express"
import { send } from "process";
require('dotenv').config(); 
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const {EMAIL_TRANSPORTER, PASS, MY_EMAIL, PORT} = process.env


const app:Application = express()
app.listen(PORT || 3001, () => {
    console.log("servidor corriendo en puerto 3001!")
})

app.use(express.urlencoded({extended: false}))
app.use(express.json())

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) 

app.post("/sendEmail",  async(req:Request,res:Response) => {
    const {name, email, msj} = req.body
    const contHTML= 
        `<h3> Contact info:</h3>
            <ul>
                <li>Name: ${name} </li>
                <li>Email: ${email} </li>
            </ul>
        <h4>Message: ${msj}</h4>
        `
    try{
        const transporter= nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth:{
            user: `${EMAIL_TRANSPORTER}`,  
            pass: `${PASS}`
        }
        })
        await transporter.verify()
        await transporter.sendMail({
            from: `'Portfolio' <${EMAIL_TRANSPORTER}>`,
            to: `${MY_EMAIL}`,
            subject: "[Nuevo email desde MyPortfolio]",
            html: contHTML
        })
        return res.send("email enviado correctamente")
    }
    catch(err){
        return res.send(err)
    }
});
