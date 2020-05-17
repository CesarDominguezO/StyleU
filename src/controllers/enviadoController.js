const controller = {};

controller.list = (req, res) =>{
    res.render('enviado.html', {
        title: 'StyleU'
    });

};
module.exports = controller;
