const controller = {};

controller.list = (req, res) =>{
    res.render('registro.html', {
        title: 'StyleU'
    });

};
module.exports = controller;