
class CustomError {
  constructor( message, status = 400){
    this.message = message;
    this.status = status;
  }
}

class NotFoundError extends CustomError {
  constructor(message){
    super( message || 'Not Found', 404);
  }
}

class ValidationError extends CustomError {
  constructor(errors){
    super( 'Validation Error', 400);
    this.errors = errors;
  }
}

class AuthError extends CustomError {
  constructor(error){
    super( error, 401);
  }
}

class NotImplementedError extends CustomError {
  constructor(){
    super( 'Not Implemented', 501);
  }
}

class RequestError extends CustomError {
  constructor(message, status){
    super( message, status );
  }
}

export {
  AuthError,
  CustomError,
  RequestError,
  NotFoundError,
  ValidationError,
  NotImplementedError
}