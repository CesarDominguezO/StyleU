const controller = {};

controller.list = (req, res) =>{
    res.render('test9.html', {
        title: 'StyleU'
    });

};
module.exports = controller;