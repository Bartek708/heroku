const express = require('express');
var app = express();
var path = require('path');
var pets = require('./pet.json');
app.use(express.static('resoruces'));

function pet(name, age, type){
    this.name = name;
    this.age = age;
    this.type = type;
}



app.get('/', (req, res) => {
 res.sendFile(path.join(__dirname + '/index.html'))
});


app.get('/info', function(req, res) {
    

    res.render(__dirname + '/info.ejs', {
        pets: pets
    });
});

app.get('/data', (req, res) => {
 res.json(pets)
});

app.get('/pictures', function(req, res) {
    
    res.render(__dirname + '/pictures.ejs', {
        pets: pets
    });
});

app.use("/static",
        express.static('resources'));

app.listen(process.env.PORT || 8080)