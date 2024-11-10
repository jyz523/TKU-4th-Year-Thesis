const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'Front')));

app.get('/index', (req, res) => {
<<<<<<< HEAD
    
=======
  res.sendFile(path.join(__dirname, 'Front', 'Dorm', 'index.html'));
>>>>>>> 2cdf62a (Fix dorm and server files)
});

app.get('/', (req, res) => {
    res.redirect('/index');
});

app.get('/dormitory', (req, res) => {
<<<<<<< HEAD

=======
  res.sendFile(path.join(__dirname, 'Front', 'Dorm', 'dormitory.html'));
>>>>>>> 2cdf62a (Fix dorm and server files)
});

app.get('/dorm123', (req, res) => {
  res.sendFile(path.join(__dirname, 'Front', 'Dorm', 'dorm123.html'));
});

app.get('/dorm123location', (req, res) => {
  res.sendFile(path.join(__dirname, 'Front', 'Dorm', 'dorm123_location.html'));
});

app.get('/dorm123public', (req, res) => {
  res.sendFile(path.join(__dirname, 'Front', 'Dorm', 'dorm123_public.html'));
});

app.get('/dorm123fee2people', (req, res) => {
  res.sendFile(path.join(__dirname, 'Front', 'Dorm', 'dorm123_fee2people.html'));
});

app.get('/dorm123fee4people', (req, res) => {
  res.sendFile(path.join(__dirname, 'Front', 'Dorm', 'dorm123_fee4people.html'));
});

app.get('/dorm123QA', (req, res) => {
  res.sendFile(path.join(__dirname, 'Front', 'Dorm', 'dorm123QA.html'));
});

app.get('/dormtku', (req, res) => {
  res.sendFile(path.join(__dirname, 'Front', 'Dorm', 'dormtku.html'));
});

app.get('/dormtkulocation', (req, res) => {
  res.sendFile(path.join(__dirname, 'Front', 'Dorm', 'dormtku_location.html'));
});

app.get('/dormtkufee', (req, res) => {
  res.sendFile(path.join(__dirname, 'Front', 'Dorm', 'dormtku_fee.html'));
});

app.get('/dormtkupublic', (req, res) => {
  res.sendFile(path.join(__dirname, 'Front', 'Dorm', 'dormtku_public.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
