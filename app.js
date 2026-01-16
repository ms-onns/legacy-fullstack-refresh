const express = require('express')
const path = require('path')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const createError = require('http-errors')
const dotenv = require('dotenv')
const handlebars = require('express-handlebars')

dotenv.config()

const app = express()

// ================= HANDLEBARS ==================
app.engine(
  'hbs',
  handlebars.engine({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'src/views/layout'),
    partialsDir: path.join(__dirname, 'src/components'),
  }),
)

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'src/views'))

// ================= MIDDLEWARE ==================
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

// ================= STATIC ==================
app.use(express.static(path.join(__dirname, 'public')))

// ================= ROUTES ==================
const router = require('./src/route/index')
app.use('/', router)

// ================= 404 ==================
app.use((req, res) => {
  res.status(404).send('404 Not Found')
})

module.exports = app
