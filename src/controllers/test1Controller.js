const controller = {};

controller.list = (req, res) =>{
    res.render('test1.html', {
        title: 'StyleU'
    });

};
module.exports = controller;