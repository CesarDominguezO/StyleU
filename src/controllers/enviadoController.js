const controller = {};

controller.list = (req, res) =>{
    req.session.check=false;
    req.session.dev=false;
    res.render('enviado.html', {
        title: 'StyleU'
    });

};

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
