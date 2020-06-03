const controller = {};

controller.list = (req, res) =>{
    res.render('checkout.html', {
        title: 'StyleU',
        info:{}
    });

};

controller.check = (req, res) =>{
    const data =req.body;
    req.getConnection((err, conn) =>{
        var query=conn.query('UPDATE `usuario` set ?', [data], (err, test) =>{
            console.log(query.sql);
                //res.send('works!');
                req.session.check=true;
                res.render('/checkout.html', {
                    info: data
                });
        });
    });
};
module.exports = controller;

