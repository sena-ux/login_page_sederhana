module.exports ={
    konsultasi(req, res){
        res.render("konsultasi",{
            url: 'http://localhost:5050/',
            userName: req.session.username,
        });
    },
    pengajuan(req, res){
        res.render("konsultasi",{
            url: 'http://localhost:5050/',
            userName: req.session.username,
        });
    }
}