const controller = {};

controller.list = (req, res) =>{
    req.session.check=false;
    res.render('registro.html', {
        title: 'StyleU'
    });

};

controller.reg = (req, res) =>{
    //var test = req.session.test ? req.session.test : [];
    var reg1= req.body;
    //req.session.reg=reg1;
    console.log(reg1);
}

controller.reg = (req, res) =>{
    const data =req.body;
    req.getConnection((err, conn) =>{
        var query=conn.query('INSERT INTO usuario set ?', [data], (err, test) =>{
            console.log(query.sql);
            if(err){
                res.json(err);
            }
            //console.log(test);
            //res.send('works!');
            res.redirect('/');
        });
    });
};

module.exports = controller;