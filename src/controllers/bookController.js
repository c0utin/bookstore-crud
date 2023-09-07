import book from "../models/Book.js"
import { author } from "../models/Author.js"

class BookController {

  static async listBooks (req, res) {
    const listBooks = await book.find({});
    res.status(200).json(listBooks);
  };

  static async listBookID (req, res) {
    try {
      const id = req.params.id;
      const selectedBook = await book.findById(id);
      res.status(200).json(selectedBook);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Request failed` });
    }
  };


  static async registerBook (req, res) {
    const newBook = req.body;
    try {
      const authorFound = await author.findById(newBook.author)
      const allBook = { ...newBook, author: { ...authorFound._doc } };
      const bookCreated = await livro.create(allBook);
      res.status(201).json({ message: 'Successfully created', book: newBook });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Failed to register` });
    }
  }

  static async updateBook (req, res) {
    try {
      const id = req.params.id;
      await book.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: 'Successfully updated' });
    } catch (error) {
      res.status(500).json({ message: ' Failed to update' });
    }
  };

  static async deleteBook (req, res) {
    try {
      const id = req.params.id;
      await book.findByIdAndDelete(id);
      res.status(200).json({ message: 'Book deleted' });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Failed to delete` });
    }
  };

  static async listBooksByPublisher (req, res) {
    const publisher = req.query.publisher;
    try {
      const booksByPublisher = await book.find({pushisher: publisher});
      res.status(200).json(booksByPublisher);
    } catch(error) {
      res.status(500).json({ message: `${error.message} - Failed` });
    }
  }

};

export default BookController;