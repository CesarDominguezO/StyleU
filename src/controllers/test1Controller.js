const controller = {};

controller.list = (req, res) =>{
    res.render('test1.html', {
        title: 'StyleU'
    });

};

controller.test = (req, res) =>{
    var test = req.session.test ? req.session.test : {};
    var test1= req.body;
    req.session.test=test1;
    console.log(req.session.test);
    res.redirect('/test3.html');
}



/*controller.save = (req, res) =>{
    const data =req.body;
    req.getConnection((err, conn) =>{
        var query=conn.query('INSERT INTO test set ?', [data], (err, test) =>{
            console.log(query.sql);
            if(err){
                res.json(err);
            }
            //console.log(test);
            //res.send('works!');
            res.redirect('/');
        });
    });
};*/

module.exports = controller;