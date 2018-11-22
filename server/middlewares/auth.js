import { AuthError } from '../lib/CustomError';

export default (req,res,next) => {

  if(!req.get('Authorization'))
    throw new AuthError('Action not permitted');
  next();
}