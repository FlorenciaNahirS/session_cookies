const { check } = require('express-validator');

module.exports = [
    check('nombre')
        .notEmpty().withMessage('*El nombre es requerido'),

    check('color')
        .notEmpty().withMessage('*El color es requerido'),

    check('email')
        .notEmpty().withMessage('*El email es requerido').bail()
        .isEmail().withMessage('*Ingrese un email valido'),

    check('edad')
        .notEmpty().withMessage('*La edad es requerida').bail()
        .isInt().withMessage('*La edad tiene que ser un número')
]