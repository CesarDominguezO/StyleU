const controller = {};

controller.list = (req, res) =>{
    req.session.check=false;
    res.render('index.html', {
        title: 'StyleU'
    });

};


controller.signout = (req, res) =>{
    req.session.auth=false;
    res.redirect('/index.html');
};

module.exports = controller;