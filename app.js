const express = require('express')
const path = require('path')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const createError = require('http-errors')
const dotenv = require('dotenv')

dotenv.config()

const app = express()

// ================= HANDLBARS ==================

const handlebars = require('express-handlebars')
const hbs = handlebars.create({
  extname: 'hbs',
  defaultLayout: 'default',
  layoutsDir: path.join(__dirname, 'src/layout'),
  partialsDir: path.join(__dirname, 'src/components'),
  helpers: {
    isObject: (value) => typeof value === 'object' && value !== null,
    isArray: Array.isArray,
    eq: (a, b) => a === b,
    concat: (a, b) => `${a}${b}`,
  },
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'src/views/pages'))

// =================================================

// CORE MIDDLEWARE
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

// STATIC FILES
app.use(express.static(path.join(__dirname, 'public')))

// LIVE RELOAD (DEV ONLY)
if (process.env.NODE_ENV === 'development') {
  const livereload = require('livereload')
  const connectLiveReload = require('connect-livereload')

  const liveReloadServer = livereload.createServer()
  liveReloadServer.watch(path.join(__dirname, 'public'))

  liveReloadServer.server.once('connection', () => {
    setTimeout(() => liveReloadServer.refresh('/'), 100)
  })

  app.use(connectLiveReload())
}

// ROUTES
const router = require('./src/route/index.js')
app.use('/', router)

// 404
app.use((req, res, next) => {
  next(createError(404, 'Page not found'))
})

// ERROR HANDLER
app.use((err, req, res, next) => {
  const isDev = req.app.get('env') === 'development'

  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    status: err.status,
    error: isDev ? err : {},
  })
})

module.exports = app
