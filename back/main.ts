
import { Request, Response, Application } from "express"
require('dotenv').config(); 
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const colors = require('colors');
const smtpTransport = require("nodemailer-smtp-transport"); 

const {EMAIL_TRANSPORTER, PASS, MY_EMAIL, PORT} = process.env


const app:Application = express()
app.listen(PORT || 3001, () => {
    console.log(colors.blue(`servidor corriendo en el puerto ${PORT}!`))
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
    let nameCapitalized = name.split(" ").map((e:string) => e.charAt(0).toUpperCase() + e.slice(1)).join(" ")
    const contHTML= 
    `<div style="font-size:15px; width: 40%; background: #f7f7f7; padding:18px;text-align: center; border-radius: 5px;"> 
        <h2 >¡Hola Darío!</h2>
        <div style="width: 59%;margin: auto">
            <p ><b> ${nameCapitalized}</b> te ha enviado un correo desde tu portfolio:</p>
                <div style="margin: auto; text-align:center;background:#ededed;min-height: 75px;
                    vertical-align: middle;line-height: 32px;padding: 5px; border-radius: 5px;">
                    <b>"${msj}"</b>
                </div>
        </div>   
        <p>Para contactarte con esta persona, envia tu respuesta al siguiente email: <br> 
        ${email}
        </p> 
    </div>`
    try{
        const transporter= nodemailer.createTransport(smtpTransport({
        host: "smtp-mail.outlook.com",
        port: 587,
        secure: false,  
        auth:{
            user: `${EMAIL_TRANSPORTER}`,  
            pass: `${PASS}`
        },
        })
        )
         transporter.sendMail({
            from: `'Portfolio' <${EMAIL_TRANSPORTER}>`,
            to: `${MY_EMAIL}`,
            subject: "[Nuevo email desde MyPortfolio]",
            html: contHTML
        }, function (error:any, info:any) {
            if (error) {
              console.log(error);
              res.send("No se pudo enviar el email")
            } else {
              console.log("Email enviado correctamente: " + info.response); 
              return res.send("email enviado correctamente")
            }
          }
        
        )
    }
    catch(err){
        return res.send("nono")
    }
});