/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const { doctors } = require('./db/seed');

const app = express();
app.use(cors());
app.use(express.static(`${__dirname}/public`));
const whitelist = ['http://localhost:3000'];
const corsOptions = {
    origin(origin, callback) {
        console.log('origin', origin);
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
};
app.use(cors(corsOptions));
// app.use(cors());

app.get('/', (req, res) => res.send('<h1>Hello world</h1>'));
app.get('/doctors', (req, res) => res.send(doctors));
app.get('/doctors/:doctorID', (req, res) => {
    const { doctorID } = req.params;
    res.send(doctors.filter(doctor => doctor.id === parseInt(doctorID)));
});

app.listen('8000', () => console.log(`Server is running on Port 8000`));
