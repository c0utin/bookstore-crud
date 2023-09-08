import mongoose from 'mongoose';
// eslint-disable-next-line no-unused-vars
function errorHandler (error, req, res, next) {
  if (error instanceof mongoose.Error.CastError){
    res.status(400).send({ message: 'ID provided is invalid' });
  } else {
    res.status(500).send({ message: 'Internal server error' });
  }
}
export default errorHandler;