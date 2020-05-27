const controller = {};

controller.list = (req, res) =>{
    res.render('test6.html', {
        title: 'StyleU'
    });

};
module.exports = controller;