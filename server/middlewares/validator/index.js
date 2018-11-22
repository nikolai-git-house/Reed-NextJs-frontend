import validate  from 'validate.js';
import { ValidationError } from '../../lib/CustomError';

// custom validations
require('./isMongoId')(validate);
require('./isAscii')(validate);
require('./isBoolean')(validate);
require('./each')(validate);
require('./extend-datetime')(validate);

// validator function, will return an express middleware
module.exports = ( key, constraint, extend, clean = true ) => async ( req, res, next ) => {

  // key        : will be used for this > req[key]
  // constraint : validation schema object
  // extend     : Function, ( req ) => ({ userId: req.user._id }) will extend req[key] & constraint.
  // clean      : clean object, only keys defined in original schema will pass this.
  //              keys defined in extend will not be passed to the controller


  try{
    
    // normal validation
    if( !extend ) await validate.async( req[key], constraint );

    // validate object with extended attributes
    else {
      const extendObj = extend(req);
      const extendConstraint = Object.keys( extendObj ).reduce((a,b) => { a[b] = {}; return a; },{});
      await validate.async( 
        { ...req[key], ...extendObj }, 
        { ...constraint, ...extendConstraint } 
      );
    }

    // clean data
    if( clean ){
      for(let i in req[key])
        if(typeof constraint[i] === 'undefined') 
          delete req[key][i];
    }

  }catch(e){

    if(e instanceof Error) return next(e);
    else return next(new ValidationError(e));

  }
  
  next();

}