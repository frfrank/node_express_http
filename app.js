const express = require('express')
const app = express()
const port = 8080;

app.set('view engine', 'hbs');
//Servir contenido estatico
app.use(express.static('public'));

app.get('/',  (req, res) => {
   res.render('home');
});

app.get('/home/generic', (req, res) =>  {
    res.sendFile(__dirname + '/public/home/generic.html');
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
