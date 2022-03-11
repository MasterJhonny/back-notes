const express = require('express');
const cors = require('cors');
const routerApi = require('./routers');

const app = express();

const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('This is api notes!')
})

routerApi(app);


app.listen(port,() => {
    console.log(`http://localhost:${port}`);
})