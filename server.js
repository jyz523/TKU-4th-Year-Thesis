const express = require('express');
const path = require('path');
const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, 'Front')));


app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, 'Front', 'index.html'));
});


app.get('/', (req, res) => {
  res.redirect('/index');
});

app.get('/dormitory', (req, res) => {
  res.sendFile(path.join(__dirname, 'Front', 'dormitory.html'));
});
  
app.get('/dorm123', (req, res) => {
  res.sendFile(path.join(__dirname, 'Front', 'dorm123.html'));
});

app.get('/dorm123location', (req, res) => {
  res.sendFile(path.join(__dirname, 'Front', 'dorm123_location.html'));
});

app.get('/dorm123public', (req, res) => {
  res.sendFile(path.join(__dirname, 'Front', 'dorm123_public.html'));
});

app.get('/dorm123fee2people', (req, res) => {
  res.sendFile(path.join(__dirname, 'Front', 'dorm123_fee2people.html'));
});
app.get('/dorm123fee4people', (req, res) => {
  res.sendFile(path.join(__dirname, 'Front', 'dorm123_fee4people.html'));
});

app.get('/dorm123QA', (req, res) => {
  res.sendFile(path.join(__dirname, 'Front', 'dorm123QA.html'));
});

app.get('/dormtku', (req, res) => {
  res.sendFile(path.join(__dirname, 'Front', 'dormtku.html'));
});

app.get('/dormtkulocation', (req, res) => {
  res.sendFile(path.join(__dirname, 'Front', 'dormtku_location.html'));
});
app.get('/dormtkufee', (req, res) => {
  res.sendFile(path.join(__dirname, 'Front', 'dormtku_fee.html'));
});
app.get('/dormtkupublic', (req, res) => {
  res.sendFile(path.join(__dirname, 'Front', 'dormtku_public.html'));
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
