const controller = {};

controller.list = (req, res) =>{
    req.session.check=false;
    res.render('promo.html', {
        title: 'StyleU'
    });

};
module.exports = controller;