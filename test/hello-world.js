import chai from 'chai';
import chaiHttp from 'chai-http';
import mongoose from 'mongoose';

import Server from './utils/init-server.js'


chai.use(chaiHttp);
let should = chai.should()

// Initiate server from Server class
const server = Server();


describe("Test server status", function () { 

  this.timeout(20000);

  it('server should return 200', async () => {
    // Make sure the server is finished loading
    const app = await server;
    return chai.request(app)
      .get('/')
      .then(res => {
        res.status.should.equal(200);
      })
  })

})