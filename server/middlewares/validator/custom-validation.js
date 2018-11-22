// this is an example
//
// example schema:
//   {
//     someKey: {
//       isCustomValidated: true
//     },
//     otherKey: {}
//   }

// example object: 
//   {
//     someKey: 'asdf',
//     otherKey: 'zxcv'
//   }


module.exports = ( validate ) => {

  validate.validators.isCustomValidated = (value, options, key, attributes) => new validate.Promise(async (resolve, reject) => {

    // value : 'asdf'
    // attributes : 
    //   {
    //     someKey: 'asdf',
    //     otherKey: 'zxcv'
    //   }

    try{
      
      // value is valid
      if( value === 'asdf' ) {
        resolve()  
      }

      // value is not valid
      else {
        resolve( 'is not valid' )

        // will result in:
        // { someKey: ['someKey is not valid'] }
      }

    }catch(e){ reject(e) }
  })
}