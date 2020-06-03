const controller = {};

controller.list = (req, res) =>{
    req.session.check=false;
    res.render('enviado.html', {
        title: 'StyleU'
    });

};
module.exports = controller;
