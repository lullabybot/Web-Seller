require('dotenv').config();
const PORT = process.env.PORT || 5050;
const express = require('express');

const UkmRoutes = require('./routes/ukm.js')
const logreq = require('./middleware/log')


const app = express();

app.use(logreq);
app.use(express.json());

app.use('/ukm', UkmRoutes);

app.listen(PORT, () => {
    console.log('Server get Running in port', PORT);
})