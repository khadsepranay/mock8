let jsonServer = require('json-server')
let Server = jsonServer.create()
let Router = jsonServer.router('db.json')
let Middleware = jsonServer.defaults()
let cors = require('cors')

Server.use(cors())
Server.use(Router)
Server.use(Middleware)

Server.listen(8000)