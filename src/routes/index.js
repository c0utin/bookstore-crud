import express from "express";
import books from "../routes/booksRoutes.js";

const routes = (app) => {
  app.route('/').get((req, res) => res.status(200).send('Node :)'));

  app.use(express.json(), books);
};

export default routes;