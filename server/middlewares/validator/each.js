
module.exports = ( validate ) => {

  validate.validators.each = (value, options, key, attributes) => new validate.Promise(async (resolve, reject) => {

    if(!value) return resolve();
    if(value && !(value instanceof Array))
      return resolve( 'should be an array' )

    let index = -1;
    try{
      
      for(let i in value){
        index = i;
        await validate.async({ eachData: value[i] }, { eachData: options});
      }

      resolve();
    }catch(e){ 
      resolve( `error on index ${index}: ${e.eachData.join(', ')}` )
    }

  })
}