const express = require('express');
const app = express();
const bodyParser = require("body-parser"); 
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ 
  extended: true
})); 

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

mongoose.connect("mongodb://localhost:27017/test", {useNewUrlParser: true});

const contactSchema = {
  email: String,
  query: String,
}; 
const Contact = mongoose.model("Contact", contactSchema);

app.post("/contact", function (req, res) {
  const contact = new Contact({
      email: req.body.email,
      query: req.body.query,
  });
  contact.save(function (err) {
      if (err) {
        res.send("Error Occurred");
      } else {
        res.send("Contact Save");
      }
  });
});

app.get('/', function (req, res) {
  res.send('Hello Docker')
})

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
  });