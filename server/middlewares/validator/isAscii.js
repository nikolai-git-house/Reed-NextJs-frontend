
module.exports = ( validate ) => {

  const regExp = /^[\x00-\x7F]*$/;

  validate.validators.isAscii = (value, options, key, attributes) => new validate.Promise(async (resolve, reject) => {

    try{
      
      if(!value) resolve();
      else if(validate.isString(value) && value.match(regExp)) resolve()
      else resolve('not a valid string');

    }catch(e){ reject(e) }
  })
}