const express = require("express");
const Datee = require("./middlewear/Date");
const app = express();
app.use(Datee);
app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/public/Home.html");
});
app.get("/services", (req, res) => {
  res.sendFile(__dirname + "/public/Services.html");
});

app.get("/contactus", (req, res) => {
  res.sendFile(__dirname + "/public/Contacus.html");
});

const port = 4000;
app.listen(port, (err) => {
  err ? console.log(err) : console.log(`server is running on port ${port}`);
});
