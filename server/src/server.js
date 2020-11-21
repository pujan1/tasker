import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import routes from './routes/api.js'
import connectDB from './db/config.js'

const app = express();
const port = 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

connectDB();

app.use('/api', routes);
app.get('*', (req, res) => res.status(200).send('invalid endpoint'));

app.listen(port, () => console.log('server running....'));