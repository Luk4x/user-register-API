const express = require('express');
const uuid = require('uuid');
const app = express();
app.use(express.json());
const port = 3000;

app.listen(port, () => {
    console.log(`㊗️ - server started in port: ${port}.`);
});

app.get('/yo', (req, res) => {
    const yo = 'Yo!';
    return res.json({ yo });
});
