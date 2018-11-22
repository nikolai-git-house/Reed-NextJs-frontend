const Server = require('../../server/server')

// Creates the server class
const NewServer = new Server.default();

// Runs the server bootstrap method. *Does not actually run the server*
const ServerInit = NewServer.bootstrap();

export default () => ServerInit;