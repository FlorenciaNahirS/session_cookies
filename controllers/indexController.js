const {validationResult} = require('express-validator')

module.exports = {
    index: (req,res) => {
        return res.render('index');
    },
    vista: (req,res) => {
        return res.render('vista');
    },
    preferencias: (req,res)  => {
        let errors = validationResult(req) ; 

        if(errors.isEmpty()){
            
            let {nombre, email, color, edad} = req.body;
    
            let datos = {
                nombre,
                email,
                color,
                edad
            }

            req.session.bg = {
                    color: color,
                    usuario: nombre
                };
    
            let bg = req.session.bg;
            
            if (req.body.recordar) {
                res.cookie('cookie', req.session.bg, { maxAge: 2000 * 60 });
            }else{
                req.session.destroy();
            }

            return res.render('index', {
                datos,
                bg
            })
        }else{
            return res.render('index',{
                errors: errors.mapped(),
                old: req.body
            })
        }
    },
    olvidar: (req,res) => {
        req.session.destroy();
        res.redirect('/');
    }
}