const path = require('path');
const express = require('express');
const session = require('express-session');
const app = express();
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
// const mongoose = require('mongoose');
// const MongoDBStore = require('connect-mongodb-session')(session);
// const URI =
//   'mongodb+srv://user1:yl8HMlTu2bczG3Xb@cluster0.fmyicip.mongodb.net/shopd?retryWrites=true&w=majority';
// const store = new MongoDBStore({
//   uri: URI,
//   collection: 'sessions',
// });
app.use(bodyParser.urlencoded({ extended: false })); // body request content
app.use(express.static(path.join(__dirname, 'css'))); // set folder static
app.set('view engine', 'ejs');
app.set('views', 'views');
// app.use(
//   session({
//     resave: false,
//     saveUninitialized: false,
//     secret: 'huhu',
//     store: store,
//   })
// );
const adminRoutes = require('./routes/admin');

app.use(adminRoutes);
app.use((req, res, next) => {
  res.render('404');
});
sequelize.sync().then(result => {
  app.listen(3000);
});
// mongoose
//   .connect(URI)
//   .then(result => {
//     app.listen(3000);
//   })
//   .catch(err => console.log(err));
