import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { corsOptions } from './config/corsOptions';
import { router } from './routes';

const PORT = 3500;

const app = express();

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
