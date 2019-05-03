const {check} = require('express-validator/check');

const validateuserCreate=[
    check(['name','productionYear', 'imdb_ratio', 'director']).exists().not().isEmpty().withMessage('All fiels are required')]

module.exports=validateuserCreate;
