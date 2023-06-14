const express = require('express');
const cors = require('cors')
require('dotenv').config();
const myDb = require('./db');
const PORT = process.env.PORT || 3000;
const app = express();
const path = require('path')

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(express.static('public'))
app.use(express.json());
app.use(cors());

app.use('/api/files', require('./routes/files'));
app.use('/files', require('./routes/show'));
app.use('/files/download', require('./routes/download'));
const start = async () => {
    try {
        await myDb.myDb();
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();
