var serverController = require('./../controllers/serverController.js');

module.exports = function(app){

  app.post('/login',             serverController.login);
  app.get('/logout',             serverController.logout);
  app.get('/current',            serverController.current);
  app.get('/user',               serverController.getloggedUser);
  app.get('/users',              serverController.getUsers);
  app.get('/user/:user_id',      serverController.getSingleUser);
  app.get('/items',              serverController.getItems);
  app.post('/items',             serverController.createItem);

}
