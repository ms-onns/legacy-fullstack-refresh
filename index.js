#!/usr/bin/env node

const http = require('http')
const app = require('./app')

const PORT = process.env.PORT || 3000

async function startServer() {
  try {
    const server = http.createServer(app)

    server.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`)
    })

    server.on('error', (err) => {
      console.error('Server error:', err)
      process.exit(1)
    })
  } catch (err) {
    console.error('Fatal startup error:', err)
    process.exit(1)
  }
}

startServer()
