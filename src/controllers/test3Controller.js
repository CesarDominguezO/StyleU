const controller = {};

controller.list = (req, res) =>{
    res.render('test3.html', {
        title: 'StyleU'
    });

};
module.exports = controller;