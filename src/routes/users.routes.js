const { Router } = require('express')

const UsersController = require('../controllers/UsersController')

const usersRoutes = Router()

function myMiddleware(request, response, next) {
  console.log("myMiddleware - usersController")
  console.log(request.body)

  next();
}

const usersController = new UsersController()

// para usar um Middleware em todas as rotas.
// usersRoutes.use(myMiddleware)
usersRoutes.post('/', myMiddleware ,usersController.create)

module.exports = usersRoutes