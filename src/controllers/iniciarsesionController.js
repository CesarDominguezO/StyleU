const controller = {};

controller.list = (req, res) =>{
    req.session.check=false;
    res.render('iniciarsesion.html', {
        title: 'StyleU'
    });

};
module.exports = controller;

controller.login = (req, res) =>{
    const data =req.body;
    console.log(data);
    req.getConnection((err, conn) =>{
        var query=conn.query('SELECT `email`, `contra` FROM `registro` WHERE email=? and contra=?', [data.email, data.contra], (err, auth) =>{
            console.log(query.sql);
            if(err){
                res.json(err);
            }
            if(auth!=''){
            console.log(auth);
            //res.send('works!');
            req.session.auth=true;
            res.redirect('/index.html');
            }
            else{
                req.flash('danger', 'La información es incorrecta o no existe, favor intente de nuevo');
                res.redirect('back');
            }
        });
    });
};
