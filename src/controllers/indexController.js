const controller = {};

controller.list = (req, res) =>{
    res.render('index.html', {
        title: 'StyleU'
    });

};
module.exports = controller;
