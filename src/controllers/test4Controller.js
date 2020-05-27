const controller = {};

controller.list = (req, res) =>{
    res.render('test4.html', {
        title: 'StyleU'
    });

};
module.exports = controller;