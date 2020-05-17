const controller = {};

controller.list = (req, res) =>{
    res.render('iniciarsesion.html', {
        title: 'StyleU'
    });

};
module.exports = controller;
