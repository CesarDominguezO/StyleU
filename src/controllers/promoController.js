const controller = {};

controller.list = (req, res) =>{
    req.session.check=false;
    req.session.dev=false;
    res.render('promo.html', {
        title: 'StyleU'
    });

};
module.exports = controller;