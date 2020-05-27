const controller = {};

controller.list = (req, res) =>{
    res.render('test8.html', {
        title: 'StyleU'
    });

};
module.exports = controller;