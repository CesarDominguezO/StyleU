const controller = {};

controller.list = (req, res) =>{
    res.render('test1.html', {
        title: 'StyleU'
    });

};

controller.save = (req, res) =>{
    const data =req.body;
    req.getConnection((err, conn) =>{
        conn.query('INSERT INTO test set ?', [data], (err, test) =>{
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