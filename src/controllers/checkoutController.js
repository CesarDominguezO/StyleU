const controller = {};

controller.list = (req, res) =>{
    req.session.dev=false;
    res.render('checkout.html', {
        title: 'StyleU'//,
        //info:{}
    });

};

//controller.check = (req, res) =>{
    //const data =req.body;
 //   req.getConnection((err, conn) =>{
      //  var query=conn.query('UPDATE `usuario` set `nombre`=?, `apellido`=?, `email`=?, `pais`=?, `estado`=?, `ciudad`=?, `col`=?, `calle`=?, `num`=?, `cp`=?', [data.nombre, data.apellido, data.email, data.pais, data.estado, data.ciudad, data.col, data.calle, data.num, data.cp], (err, check) =>{
          //  console.log(query.sql);
          //  if(err){
               // res.json(err);
           // }
            //res.redirect('/');
                //res.send('works!');
                //req.session.check=true;
                //res.redirect('back');//, {
                    //info: data
               // });
       // });
    //});
//};

controller.check = (req, res) =>{
    const data =req.body;
    console.log(data);
    req.getConnection((err, conn) =>{
        var query=conn.query('UPDATE `usuario` set ? WHERE email=?', [data, data.email], (err, auth) =>{
            console.log(query.sql);
            if(err){
                res.json(err);
            }
            console.log(auth);
            //res.send('works!');
            req.session.check=true;
            res.redirect('/checkout.html');
            
            //else{
                //req.flash('danger', 'La información es incorrecta o no existe, favor intente de nuevo');
                //res.redirect('back');
            //}
        });
    });
};
module.exports = controller;

