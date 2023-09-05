import express from "express";

const app = express();

app.use(express.json());

const books = [
  {id: 1, title: 'Harry Potter'},
  {id: 2, title: 'Lord of the Rings'}
];

app.get('/', (req, res) => {
  res.status(200).send('Node :)');
});

app.get('/books', (req, res) => {
  res.status(200).json(books);
});

app.post('/books', (req, res) => {
  books.push(req.body);
  res.status(201).send('book registred');
})

export default app;