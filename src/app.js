import express from 'express';
import connectDatabase from './config/dbConnnect.js';
import routes from './routes/index.js';
import errorHandler from './middlewares/errorHandler.js';

// Connect database

const connection = await connectDatabase();

connection.on('error', (error) => {
  console.error('connection error :(', error);
});

connection.once('open', () => {
  console.log('connection database sucessfull');
});

const app = express();
routes(app); 

app.use(errorHandler);


export default app;