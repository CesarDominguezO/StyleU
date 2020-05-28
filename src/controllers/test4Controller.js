const controller = {};

controller.list = (req, res) =>{
    res.render('test4.html', {
        title: 'StyleU'
    });

};

controller.test = (req, res) =>{
    var test = req.session.test;
    var test1= req.body;
    Object.assign(test, test1);
    //req.session.test=test1;
    console.log(test1);
}

module.exports = controller;