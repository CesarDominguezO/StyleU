const controller = {};

controller.list = (req, res) =>{
    req.session.check=false;
    req.session.dev=false;
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
    console.log(data);
    req.getConnection((err, conn) =>{
        if(data.email=='' || data.contra=='' || data.nombre=='' || data.apellido==''){
            req.flash('danger', 'Uno o más campos están vacios, intente nuevamente');
            res.redirect('back');
        }
        
        else{
            var query=conn.query('INSERT INTO usuario set ?', [data], (err, test) =>{
            console.log(query.sql);
            if(err){
                res.json(err);
            }
            //console.log(test);
            //res.send('works!');
            
        });
        res.redirect('/');
        }
    });
};

module.exports = controller;