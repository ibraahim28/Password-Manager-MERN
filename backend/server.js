const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
require('./config/DB');
const bodyParser = require('body-parser')
const userRouter = require('./src/routers/UserRouter');
const passwordRouter =require('./src/routers/passwordRouter')
app.use(bodyParser.json())
app.use(express.json());
app.use(cors())
app.use('/user', userRouter);
app.use('/password', passwordRouter)  

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});