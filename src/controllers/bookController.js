import book from '../models/Book.js';
import { author } from '../models/Author.js';

class BookController {

  static async listBooks (req, res) {
    const listbooks = await book.find({}).populate('author').exec();
    res.status(200).json(listbooks);
  }

  static async listBookID (req, res, next) {
    try {
      const id = req.params.id;
      const selectedBook = await book.findById(id);
      res.status(200).json(selectedBook);
    } catch (error) {
      next(error);
    }
  }


  static async registerBook (req, res, next) {
    const newBook = req.body;
    try {
      const authorFound = await author.findById(newBook.author);
      const allBook = { ...newBook, author: { ...authorFound._doc } };
      const bookCreated = await book.create(allBook);
      res.status(201).json({ message: 'Successfully created', book: bookCreated });
    } catch (error) {
      next(error);
    }
  }

  static async updateBook (req, res, next) {
    try {
      const id = req.params.id;
      await book.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: 'Successfully updated' });
    } catch (error) {
      next(error);
    }
  }

  static async deleteBook (req, res, next) {
    try {
      const id = req.params.id;
      await book.findByIdAndDelete(id);
      res.status(200).json({ message: 'Book deleted' });
    } catch (error) {
      next(error);
    }
  }

  static async listBooksByPublisher (req, res, next) {
    const publisher = req.query.publisher;
    try {
      const booksByPublisher = await book.find({pushisher: publisher});
      res.status(200).json(booksByPublisher);
    } catch(error) {
      next(error);
    }
  }

}

export default BookController;