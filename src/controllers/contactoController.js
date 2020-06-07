const controller = {};

controller.list = (req, res) =>{
    req.session.check=false;
    req.session.dev=false;
    res.render('contacto.html', {
        title: 'StyleU'
    });

};

controller.add = (req, res) =>{
    const data =req.body;
    req.getConnection((err, conn) =>{
      conn.query('INSERT INTO contact set ?', [data], (err, contact) =>{
      if(err){
        res.json(err);
      }
      req.flash('success', 'Correo enviado!');
      res.redirect('back');
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