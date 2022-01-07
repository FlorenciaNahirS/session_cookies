module.exports = (req,res,next) => {
    if(req.session.bg){
        res.locals.bg = req.session.bg
    }
    next()
}

