require('dotenv').config()

const express = require("express");
const app = express()
const methodOverride = require('method-override');
const PORT = 3000;

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride("_method"))
app.use(express.static('public'))

// view engine
app.set('view engine', 'ejs')

// connected to database
const connectDB = require('./config/connectDB')
connectDB()
app.listen(PORT, () => console.log('Port', PORT))

// routes
app.get('/', (req, res) => res.redirect('/books'))
app.use(require('./routes/bookRoutes'))
app.use((req, res) => res.render('404'))