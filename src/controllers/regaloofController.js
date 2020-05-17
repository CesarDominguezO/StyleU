const controller = {};

controller.list = (req, res) =>{
    res.render('regaloof.html', {
        title: 'StyleU'
    });

};
module.exports = controller;