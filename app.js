require('dotenv').config()

const express = require("express");
const { default: mongoose } = require("mongoose");
const methodOverride = require('method-override')
const app = express()
const PORT = 3000;

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride("_method"))
app.use(express.static('public'))

// view engine
app.set('view engine', 'ejs')

// connect to db
mongoose.connect(process.env.MOGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(PORT, () => console.log('Connected to Database\nServer is running on port '+ PORT)))
  .catch((err) => console.log(err));

// routes
app.get('/', (req, res) => {
    res.redirect('/books')
})
app.use(require('./routes/bookRoutes'))