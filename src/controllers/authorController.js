import { author } from "../models/Author.js";

class AuthorController {

  static async listAuthors (req, res) {
    try {
      const listAuthors = await author.find({});
      res.status(200).json(listAuthors);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Request failed` });
    }
  };

  static async listAuthorID (req, res) {
    try {
      const id = req.params.id;
      const selectedAuthor = await author.findById(id);
      res.status(200).json(selectedAuthor);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Request failed` });
    }
  };

  static async registerAuthor (req, res) {
    try {
      const newAuthor = await author.create(req.body);
      res.status(201).json({ message: 'Successfully created', author: newAuthor });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Failed to register` });
    }
  };

  static async updateAuthor (req, res) {
    try {
      const id = req.params.id;
      await author.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: 'Successfully updated' });
    } catch (error) {
      res.status(500).json({ message: ' Failed to update' });
    }
  };

  static async deleteAuthor (req, res) {
    try {
      const id = req.params.id;
      await author.findByIdAndDelete(id);
      res.status(200).json({ message: 'Author deleted' });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Failed to delete` });
    }
  };

};

export default AuthorController;