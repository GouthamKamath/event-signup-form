const express = require('express');
const app = express(); 

app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
let name;
app.get('/',(req,res)=>{
    res.sendFile(`${__dirname}/index.html`);
})

app.post('/',(req,res)=>{
    name = req.body.fullname;
    const email = req.body.email;
    const password = req.body.password;
    const cnfpassword = req.body.cnfpassword;
    
    if(res.statusCode == 200){
        res.sendFile(`${__dirname}/success.html`);
    }
    else{
        res.sendFile(`${__dirname}/failure.html`);
    }
})

app.post('/failure',(req,res)=>{
    res.redirect('/');
})

app.listen(3000,()=>{
    console.log('Listening on port 3000..');
})

module.exports = {
    firstname: name
};