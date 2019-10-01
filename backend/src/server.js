const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    return res.json({message: "Falaaaaa Dev!!!!!"});
});

app.listen(3333); //escuta a porte 3333