
module.exports = ( validate ) => {

  const regExp = /^[a-f\d]{24}$/i;

  validate.validators.isMongoId = (value, options, key, attributes) => new validate.Promise(async (resolve, reject) => {

    try{
      
      if(!value) resolve();
      else if(validate.isString(value) && value.match(regExp)) resolve()
      else resolve('not a valid id');

    }catch(e){ reject(e) }
  })
}