const express = require('express');
const app = express();
const port = 3000;
const dotenv = require('dotenv');
dotenv.config();
require('./config/DB');
const userRouter = require('./src/routers/UserRouter');
app.use(express.json());
app.use('/user', userRouter);
    
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});