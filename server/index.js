const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
require('dotenv').config();

const users = require('./api/users');
const initializeConnection = require('./database');

// ---- CONNECT DATABASE ----
initializeConnection();

// ---- MIDDLEWARE ----
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));
app.use(cors());

// ---- API ----
app.use('/api/users', users);

// ---- HEROKU ----
app.use(express.static(path.join(__dirname, '../client/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build'));
})

// ---- START SERVER ----
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
