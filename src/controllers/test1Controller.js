const controller = {};

controller.list = (req, res) =>{
    req.session.check=false;
    req.session.dev=false;
    res.render('test1.html', {
        title: 'StyleU'
    });

};

/*controller.test = (req, res) =>{
    var test = req.session.test ? req.session.test : {};
    var test1= req.body;
    req.session.test=test1;
    console.log(req.session.test);
    res.redirect('/continuar.html');
}*/
controller.test = (req, res) =>{
    //var test = req.session.test ? req.session.test : [];
    var test1= req.body;
    //req.session.reg=reg1;
    console.log(test1);
};


controller.test = (req, res) =>{
    const data =req.body;
    req.getConnection((err, conn) =>{
        var query=conn.query('INSERT INTO test set ?', [data], (err, test) =>{
            console.log(query.sql);
            if(err){
                res.json(err);
            }
            //console.log(test);
            //res.send('works!');
            res.redirect('/continuar.html');
        });
    });
};

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
            res.redirect('/continuar.html');
        });
    });
};*/

controller.news = (req, res) =>{
    const data =req.body;
    console.log(data);
    req.getConnection((err, conn) =>{
            var query=conn.query('INSERT `newsletter` set `email`=?', [data.email], (err, test) =>{
            console.log(query.sql);
            if(err){
                res.json(err);
            }
            //console.log(test);
            //res.send('works!');
            
        });
        res.redirect('back');
        
    });
};

module.exports = controller;