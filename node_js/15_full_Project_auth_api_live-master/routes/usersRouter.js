const express = require('express');
const usersRouter = express.Router();
//h updateHobbies, logoutUser
const { createUser, loginUser, handleValidationErrors, updateHobbies, logoutUser } = require('../middleware/userMiddleware');
const {userCreateValidator, validateHobbyRequest} = require('../helpers/validateUserCreate');//h validateHobbyRequest
const isAuth = require('../middleware/isAuth');
const loginValidator = [...userCreateValidator];
loginValidator.pop();

usersRouter.post('/create', userCreateValidator, handleValidationErrors, createUser);
usersRouter.post('/login', loginValidator, handleValidationErrors, loginUser);
usersRouter.put('/update/hobbies', validateHobbyRequest, handleValidationErrors, isAuth, updateHobbies);//h
usersRouter.get('/logout', isAuth, logoutUser);

module.exports = usersRouter;


