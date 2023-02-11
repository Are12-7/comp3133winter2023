// Carlos Arellano - 101339585
require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/UserRoutes.js');
const app = express();

app.use(express.json())

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(success => {
  console.log('Success Mongodb connection')
}).catch(err => {
  console.log('Error Mongodb connection')
}); app.use(express.json())

app.use('/users', userRouter)

app.listen(8084, ()=>{ console.log('Server is running...')})


