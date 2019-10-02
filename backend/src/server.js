const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://teste:323327@omnistack09-fqlcx.mongodb.net/semana09?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.get('/', (req, res)=>{
    return res.json({message: "Falaaaaa Dev!!!!!"});
});

app.listen(3333); //escuta a porta 3333