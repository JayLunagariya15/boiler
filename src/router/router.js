const express = require('express');
const Router = express.Router();

const userControllers = require('../controllers/userController');


Router.post('/register', userControllers.register);
Router.post('/updateone', userControllers.updateone);
Router.post('/updatemany', userControllers.updatemany);
Router.post('/deleteone', userControllers.deleteone);
Router.post('/deletemany', userControllers.deletemany);
Router.post('/insertone', userControllers.insertuser);
Router.get('/finduser' , userControllers.finduser);
Router.get('/findoneuser', userControllers.findoneuser);
Router.get('/findbyid', userControllers.findid);
Router.get('/findandupdate', userControllers.modify);


module.exports = Router