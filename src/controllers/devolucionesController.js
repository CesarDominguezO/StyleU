const controller = {};

controller.list = (req, res) =>{
    req.session.check=false;
    res.render('devoluciones.html', {
        title: 'StyleU'
    });

};

//controller.cantidad = (req, res) =>{
    //const data =req.body;
    //req.getConnection((err, conn) =>{
            //console.log(query.sql);
                //var cantidad=data.cant;
                //console.log(data.cant);
                //req.session.cantidad=data.cant;
               // req.session.dev=true;
                //console.log(req.session.dev)
                //res.redirect('back');
                //res.redirect('https://www.sandbox.paypal.com/cgi-bin/webscr');
                //("#paypal").submit();
    //});
//};

controller.cantidad = (req, res) =>{
    const data =req.body;
    console.log(data);
    req.getConnection((err, conn) =>{
        var query=conn.query('UPDATE `usuario` set ?', [data], (err, auth) =>{
            console.log(query.sql);
            if(err){
                res.json(err);
            }
            console.log(auth);
            //res.send('works!');
            req.session.cantidad=data.cant;
            req.session.dev=true;
            res.redirect('/devoluciones.html');
            
            //else{
                //req.flash('danger', 'La información es incorrecta o no existe, favor intente de nuevo');
                //res.redirect('back');
            //}
        });
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