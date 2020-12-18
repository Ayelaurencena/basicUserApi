const express = require('express');
const router = express.Router();
const UserController = require("./../controllers/userController");
const UserService = require("./../services/userService");
const UserInstance = new UserController( new UserService());

/* método GET en la ruta "/" que nos va a devolver un array de nombres que vayamos agregando 
(al principio va a devolver un array vacio)*/

router.get('/', function(req, res, next) {
  UserInstance.getUsers(req, res)
});

router.post('/add', function(req, res, next) {
  UserInstance.addUser(req, res)
});


router.put('/modify/:index', function (req, res, next) {
   
  UserInstance.modifyUser(req, res)
});

router.delete('/delete/:index', function (req, res, next) {
  UserInstance.deleteUser(req, res)
})




module.exports = router;