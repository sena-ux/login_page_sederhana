module.exports ={
    permision(req, res){
        res.render("permision",{
            url: 'http://localhost:5050/',
            userName: req.session.username,
        });
    },
    pengajuan(req, res){
        res.render("permision",{
            url: 'http://localhost:5050/',
            userName: req.session.username,
        });
    }
}