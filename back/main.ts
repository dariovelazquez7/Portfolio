
import { Request, Response, Application } from "express"
require('dotenv').config(); 
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const {EMAIL_TRANSPORTER, PASS, MY_EMAIL} = process.env


const app:Application = express()
app.listen(3001, () => {
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
    const {name, email, message} = req.body
    const contHTML= `<h2> User info</h2>
     <ul>
     <li>Name: ${name} </li>
     <li>Email: ${email} </li>
     </ul>
     <p>Message: ${message}</p>
     `
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
    res.send("email enviado correctamente")
})