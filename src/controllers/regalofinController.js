const controller = {};

controller.list = (req, res) =>{
    req.session.check=false;
    res.render('regalofin.html', {
        title: 'StyleU'
    });

};
module.exports = controller;