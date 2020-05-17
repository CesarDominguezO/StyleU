const controller = {};

controller.list = (req, res) =>{
    res.render('regalo.html', {
        title: 'StyleU'
    });

};
module.exports = controller;