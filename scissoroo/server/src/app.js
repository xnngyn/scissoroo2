const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
var User = require('../models/user')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/results', (req, res) =>{

});

app.post('/insertuser', (req, res) => {
    //Get Form Values
    var fname = req.body.fname;
    var lname = req.body.lname;
    var bdate = req.body.gdatum;
    var sex = req.body.sex;
    var strasse = req.body.strasse;
    var hausnr = req.body.hausnr;
    var plz = req.body.plz;
    var stadt = req.body.stadt;
    var email = req.body.email;
    var pass = req.body.pass;

    if(fname && lname && bdate && strasse && hausnr && plz && stadt && email && pass){
        var newUser = new User({
            fullname: fname,
            lastname: lname,
            birthdate: bdate,
            sex: sex,
            strasse: strasse,
            hausnr: hausnr,
            plz: plz,
            stadt: stadt,
            email: email,
            pass: pass
        });
        
        var salt = 10;

		bcrypt.hash(newUser.pass, salt, function(err,hash) {
			if(err) throw err;

			//Set Hashed Password
			newUser.pass = hash;

            // create new User
            newUser.save(function(err, user){
                if(err){
                    return next(err)
                 } else {
                    return res.redirect('/users/registrationsuccessfull');
                }
            });
        });
    } else {
        var err = new Error('Alle Felder müssen ausgefüllt werden');
        err.status = 400;
        return next(err)
    }
})

// Mongo DB Database
var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://scissoroo_admin:scissoroo_admin@scissoroodb-vjd2z.mongodb.net/scissoroo?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
});



app.listen(process.env.PORT || 8081)