const {check} = require('express-validator/check');

const validateuserCreate=[
    check(['firstName','lastName', 'password', 'email', 'userName']).exists().not().isEmpty().withMessage('All fiels are required'),
    check('email').trim().isEmail().withMessage('The email you have passed is invalid'),
    check('password').trim().isLength({min:4,max:10}).escape().withMessage('The password you have passed is invalid'),

]

module.exports=validateuserCreate;