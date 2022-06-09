import nodemailer from 'nodemailer'
import * as dotenv from "dotenv"
import {reservationsCollection} from './../app.js'

const {
  MAIL_PASS
} = process.env
dotenv.config()

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  secureConnection: false,
  auth: {
    user: 'codingthecurbs@gmail.com',
    pass: MAIL_PASS
  }
})

let userMail, userPlate, userCode

const Mailer = (email, plate) => {
  userMail = email
  userPlate = plate

  let allReservations

  reservationsCollection.find().toArray()
    .then(result => {
      allReservations = result
    })
    .then(() => {
      allReservations.filter = (obj, predicate) =>
        Object.assign(...Object.keys(obj)
          .filter( key => predicate(obj[key]) )
          .map( key => ({ [key]: obj[key] }) ) )

      const filtered = allReservations.filter(allReservations, item => item.email === userMail && item.kenteken === userPlate)
      userCode = filtered[0].code
    })
    .then(() => {
      const mailOptions = {
        from: '"Coding the Curbs" <codingthecurbs@gmail.com',
        to: email,
        subject: 'Je bevestigingscode voor ' + plate,
        html: "Hallo!<br><p>Hierbij je bevestigingscode: <br><b>" + userCode + "</b><br><br>Hiermee kan je je reservering wijzigen of verwijderen. <br><br>Groetjes,<br>Coding the curbs</p>"
      }

      transporter.sendMail(mailOptions, function(error){
        if (error) {
          console.log(error);
        }
      })
    })
    .catch(err => console.log(err))
}

export default Mailer