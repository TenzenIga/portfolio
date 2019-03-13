const express = require('express');
const path = require('path');
const app = express();
const helmet = require('helmet');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const Joi = require('joi');
const config = require('config');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(express.static('dist'))
app.use(helmet());


app.get('*', (req, res)=>{
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

app.post('/send', (req, res)=> {
  const schema = {
    name: Joi.string().regex(/^[a-zA-Zа-яА-Я]{3,30}$/).required(),
    email: Joi.string().email({ minDomainAtoms: 2 }).required(),
    message: Joi.string().min(10).max(150).required()
  }

  const result = Joi.validate({ name: req.body.name, email: req.body.email, message:req.body.message }, schema);
    if(result.error){
      res.status(400).json(result.error.details[0].message);
      return;
    }
    let output = `
      <p>Новое письмо</p>
      <ul>
      <li>Имя: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      </ul>
      <h3>Сообщение</h3>
      <p>${req.body.message}</p>
    `;
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'tenzeniga93162@gmail.com', // generated ethereal user
        pass: config.get('mail.password') // generated ethereal password
      },
      tls:{
          rejectUnauthorized:false
      }
    });
  
    // setup email data with unicode symbols
    let mailOptions = {
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: "arhan-93@list.ru", // list of receivers
      subject: "Hello ✔", // Subject line
      text: 'hello', // plain text body
      html: output // html body
    };
  
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info)=>{
      if(error){
        return console.log(error)
      }
      console.log("Message sent: %s", info.messageId);
    })
    res.json('Cообщение отправленно!')
  })


app.listen(80, () => console.log(' Listening to port 80...'))