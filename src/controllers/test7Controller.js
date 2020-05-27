const controller = {};

controller.list = (req, res) =>{
    res.render('test7.html', {
        title: 'StyleU'
    });

};
module.exports = controller;