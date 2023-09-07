import book from "../models/Book.js"

class BookController {

  static async listBooks (req, res) {
    const listBooks = await book.find({});
    res.status(200).json(listBooks);
  };

  static async regiterBook (req, res) {
    try {
      const newBook = await book.create(req.body);
      res.status(201).json({ message: 'Successfully created', book: newBook });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Failed to register` });
    }
  }

};

export default BookController;