const controller = {};

controller.list = (req, res) =>{
    req.session.check=false;
    res.render('continuar.html', {
        title: 'StyleU'
    });

};
module.exports = controller;
