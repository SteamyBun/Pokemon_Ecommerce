const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
const userRoute = require('./routes/user');

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('DBConnection Successful'))
  .catch((err) => console.log('error'));

app.use(express.json());
app.use('/api/users', userRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log('Backend Server is Running');
});
