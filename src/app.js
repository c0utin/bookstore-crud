import express from "express";

const app = express();

app.use(express.json());

const books = [
  {id: 1, title: 'Harry Potter'},
  {id: 2, title: 'Lord of the Rings'}
];

function findBook(id) {
  return books.findIndex(book => {
    return book.id === Number(id);
  })
};

app.get('/', (req, res) => {
  res.status(200).send('Node :)');
});

app.get('/books', (req, res) => {
  res.status(200).json(books);
});

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