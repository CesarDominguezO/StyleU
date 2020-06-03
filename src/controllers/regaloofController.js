const controller = {};

controller.list = (req, res) =>{
    req.session.check=false;
    res.render('regaloof.html', {
        title: 'StyleU'
    });

};
module.exports = controller;