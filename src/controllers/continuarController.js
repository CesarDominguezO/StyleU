const controller = {};

controller.list = (req, res) =>{
    res.render('continuar.html', {
        title: 'StyleU'
    });

};
module.exports = controller;
