import { author } from '../models/Author.js';

class AuthorController {

  static async listAuthors (req, res, next) {
    try {
      const listAuthors = await author.find({});
      res.status(200).json(listAuthors);
    } catch (error) {
      next(error);
    }
  }

  static async listAuthorID (req, res, next) {
    try {
      const id = req.params.id;
      const selectedAuthor = await author.findById(id);
      if(selectedAuthor !== null){
        res.status(200).json(selectedAuthor);
      } else {
        res.status(404).json({ message: 'Request failed ID not found' });
      }
    } catch (error) {
      next(error);
    }
  }

  static async registerAuthor (req, res, next) {
    try {
      const newAuthor = await author.create(req.body);
      res.status(201).json({ message: 'Successfully created', author: newAuthor });
    } catch (error) {
      next(error);
    }
  }

  static async updateAuthor (req, res, next) {
    try {
      const id = req.params.id;
      await author.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: 'Successfully updated' });
    } catch (error) {
      next(error);
    }
  }

  static async deleteAuthor (req, res, next) {
    try {
      const id = req.params.id;
      await author.findByIdAndDelete(id);
      res.status(200).json({ message: 'Author deleted' });
    } catch (error) {
      next(error);
    }
  }
}

export default AuthorController;