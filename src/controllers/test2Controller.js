const controller = {};

controller.list = (req, res) =>{
    res.render('test2.html', {
        title: 'StyleU'
    });

};
module.exports = controller;