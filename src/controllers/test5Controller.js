const controller = {};

controller.list = (req, res) =>{
    res.render('test5.html', {
        title: 'StyleU'
    });

};
module.exports = controller;