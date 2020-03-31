const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");


const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(require("./routes/api-routes"));
app.use(require("./routes/html-routes"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://user:passw0rd@ds159926.mlab.com:59926/heroku_5gflmvpn", {
  useNewUrlParser: true,
  useUnifiedTopology: true 
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});



