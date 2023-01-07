const express = require('express')
const hbs = require('hbs');
const app = express()
const port = 8080;



app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', 
function (err) {});

//Servir contenido estatico
app.use(express.static('public'));

app.get('/',  (req, res) => {
   res.render('home', {
       name: 'Francisco',
       titulo: 'HTTP EXPRESS'
   });
});

app.get('/generic', (req, res) =>  {
    res.render('generic', {
        name: 'Francisco',
        titulo: 'HTTP EXPRESS'
    });
});

app.get('/elements', (req, res) =>  {
    res.render('elements', {
        name: 'Francisco',
        titulo: 'HTTP EXPRESS'
    });
});



app.get('/hola-mundo', (req, res) =>  {
    res.send('HOla desde la ruta hola');
});


app.get('*',  (req, res)  => {
    res.send('Page not found');
})


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
  })
