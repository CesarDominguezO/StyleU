const controller = {};

controller.list = (req, res) =>{
    res.render('test1.html', {
        title: 'StyleU'
    });

};

controller.save = (req, res) =>{
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
};

module.exports = controller;