const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'Campus_Life')));
app.use(express.static(path.join(__dirname, 'Contact_Us')));
app.use(express.static(path.join(__dirname, 'Daily_Life')));
app.use(express.static(path.join(__dirname, 'Department')));
app.use(express.static(path.join(__dirname, 'Dorm')));
app.use(express.static(path.join(__dirname, 'HomePage')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'HomePage', 'Homepage.html'));
});

// Start the server, listening on all network interfaces
app.listen(port, '000.000.0.000', () => {/* Change it into your own IPv4 address */
    console.log(`Server running at http://192.168.0.104:${port}`); /* Change it into your own IPv4 address */
});
