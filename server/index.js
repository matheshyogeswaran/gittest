const express = require('express')
const app = express();

app.get('/hello', (req, res) => {
    res.send('Welcome')  
})

app.listen(1337,()=>{
    console.log('listening on1337')
})