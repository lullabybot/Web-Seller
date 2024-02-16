import dotenv from 'dotenv';
import express from 'express';
import routes from './routes/ukm.js';
import routerPelanggan from './routes/pelanggan.js';
import logreq from './middleware/log.js';

dotenv.config();

const PORT = process.env.PORT || 5050;

const app = express();


app.use(logreq);
app.use(express.json());

app.use('/ukm', routes);
app.use('/pelanggan', routerPelanggan);

app.listen(PORT, () => {
    console.log('Server get Running in port', PORT);
})