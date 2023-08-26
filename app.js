const exp = require('express')

const Route = require('./src/route')
const Serve = require('./src/serve')
const Middleware = require('./src/middleware')

const app = exp()

Middleware(exp, app)
Route(app, __dirname)
Serve(app)
