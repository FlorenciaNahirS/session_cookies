var express = require('express');
var router = express.Router();

const formValitation = require('../validations/formValidations')
const {index, preferencias, olvidar,usuario} = require('../controllers/indexController')

/* / */
router.get('/', index);
router.post('/',formValitation, preferencias);
router.get('/olvidar',olvidar);
module.exports = router;
