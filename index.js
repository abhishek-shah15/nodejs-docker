const express = require('express');
const app = express();
const bodyParser = require("body-parser"); 
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
  extended: true
})); 

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

mongoose.connect("mongodb://mongo:27017/test", {useNewUrlParser: true});

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
  contact.save()
    .then(item => {
      res.status(200).send("Details saved to database");
    })
    .catch(err => {
      res.status(400).send("Unable to save to database");
    });
});

app.get('/', function (req, res) {
  res.send('Hello Docker')
})

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
  });
