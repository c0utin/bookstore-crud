import express from "express";
import connectDatabase from "./config/dbConnnect.js";
import routes from "./routes/index.js";

// Connect database

const connection = await connectDatabase();

connection.on('error', (error) => {
  console.error("connection error :(", error);
});

connection.once("open", () => {
  console.log("connection sucessfull");
});

const app = express();
routes(app); 

app.get('/books/:id', (req, res) => {
  const index = findBook(req.params.id);
  res.status(200).json(books[index]);
});

app.put('/books/:id', (req, res) => {
  const index = findBook(req.params.id);
  books[index].title = req.body.title; 
  res.status(200).json(books);
});

app.post('/books', (req, res) => {
  books.push(req.body);
  res.status(201).send('book registred');
});

app.delete('/books/:id', (req, res) => {
  const index = findBook(req.params.id);
  books.splice(index, 1);
  res.status(200).send('book removed');
});


export default app;