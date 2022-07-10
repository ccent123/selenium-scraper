const express = require("express");
const app = express();
const Home = require('./controllers/Home');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', Home)
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      error: err.message
    });
  });

app.listen(3000, () => {
    console.log("Ayaka Bulk Downloader");
});
module.exports = app;