const controller = {};

controller.list = (req, res) =>{
    req.session.check=false;
    res.render('regalo.html', {
        title: 'StyleU'
    });

};
module.exports = controller;