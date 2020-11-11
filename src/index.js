const express = require('express')
require('./db/mongoose')
const cackeRouter = require('./routers/cacke');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cackeRouter);

app.listen(port, () => {
    console.log('\x1b[32m%s\x1b[0m', 'Server is up on port ' + port);
})