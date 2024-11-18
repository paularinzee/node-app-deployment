const express = require('express');
const path = require('path');
const app =express();
const port = 3000;

// const replicaApp = process.static.env.APP_NAME
app.use('/static', express.static(path.join(__dirname, 'static')));

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    // console.log(`Request served by ${replicaApp}`);

});

app.listen(port, () =>{
    // console.log(`${replicaApp} is listening on port ${port}`);
    console.log(`app is listening on port ${port}`);

});