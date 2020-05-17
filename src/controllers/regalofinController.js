const controller = {};

controller.list = (req, res) =>{
    res.render('regalofin.html', {
        title: 'StyleU'
    });

};
module.exports = controller;