const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;
//require routes

//midleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

//routes
app.use(routes);

//call mongoose
mongoose.connect('mongodb://localhost/searchbooks', {
  useCreateIndex: true,
  useNewUrlParser: true
});

app.listen(PORT, () => {
  console.log('LISTENING ON PORT: ' + PORT);
});
