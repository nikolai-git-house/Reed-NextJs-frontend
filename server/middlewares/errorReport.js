
import { CustomError } from '../lib/CustomError';

export default (err,req,res,next) => {

  if(res.headersSent)
    return console.error(err);

  if(err instanceof CustomError)
    return res.status( err.status ).json({
      message: err.message,
      errors: err.errors
    });

  console.error(err);
  res.status(500).json({
    message: 'Server Error'
  });

}