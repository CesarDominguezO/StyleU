const controller = {};

controller.list = (req, res) =>{
    res.render('promo.html', {
        title: 'StyleU'
    });

};
module.exports = controller;