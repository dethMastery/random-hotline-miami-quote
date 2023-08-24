const exp = require('express')

const Route = require('./src/route')
const Serve = require('./src/serve')

const app = exp()

Route(app, __dirname)
Serve(app)