
module.exports = ( validate ) => {

  validate.validators.isBoolean = (value, options, key, attributes) => new validate.Promise(async (resolve, reject) => {

    try{
      
      if(typeof value === 'undefined') resolve();
      else if(typeof value === 'boolean') resolve();
      else resolve('not a valid boolean');

    }catch(e){ reject(e) }
  })
}