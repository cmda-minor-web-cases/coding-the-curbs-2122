const express = require('express')
// const fetch = require('node-fetch')
const app = express()
const compression = require('compression')
const port = process.env.PORT || 1234

require('dotenv').config({path: '.env-dev'})

const {
  API_KEY
} = process.env

// Link the templating engine to the express app
app.set('view engine', 'ejs')

// Tell the views engine/ejs where the template files are stored (Settingname, value)
app.set('views', 'views')

app.use(/.*-[0-9a-f]{10}\..*/, (req, res, next) => {
  res.setHeader('Cache-Control', 'max-age=365000000, immutable')
  next()
})

// Tell express to use a 'static' folder
app.use(express.static('static'))
app.use(compression())

// Create a home route
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Coding the Curbs'
  });
})



// Offline page
app.get('/offline', (req, res) => {
  res.render("offline", {
    title: "You are Offline"
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})