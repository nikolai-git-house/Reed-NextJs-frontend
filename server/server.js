import express from 'express'
import next from 'next'
import mongoose from 'mongoose';
import getConfig from 'next/config';
import qs from 'qs';
import bodyParser from 'body-parser';

// routes
import api from './api'

// dependencies
import authorizenet from './dependencies/authorizenet';
import backend from './dependencies/backend';
import PortalConnection from './dependencies/PortalConnection';

process.on('unhandledRejection', error => {
  console.log('unhandledRejection', error.stack);
  process.exit(1);
});
 
export default class Server {
  constructor() {
    this.app = express();
    mongoose.Promise = global.Promise;
    
    this.nextLoader = next({
      dev: process.env.NODE_ENV !== 'production'
    });

    // dependencies
    this.app.set('authorizenet', authorizenet);
    this.app.set('backend', backend);
    this.app.set('PortalConnection', PortalConnection);
  }

  async bootstrap() {
    const handle = this.nextLoader.getRequestHandler();
    await this.nextLoader.prepare();

    // prepares next js then grabs serverRuntimeConfig from next.config.js
    const {serverRuntimeConfig} = getConfig()

    this.app.nextRender = this.nextLoader;
    this.app.use(bodyParser.json());

    // api routes
    this.app.use('/api', api);

    // redirect trailing slash except /
    this.app.get('*', (req, res, next) => {
      if(req.path === '/') return next();
      if(!req.path.match(/\/$/)) return next();
      const query = qs.stringify(req.query);
      res.redirect(req.path.replace(/\/$/,'') + ( query ? ('?' + query) : ''));
    });

    this.app.get('/products/item/:slug', (req, res, next) => {
      const actualPage = '/products/item'
      const queryParams = { slug: req.params.slug } 
      this.nextLoader.render(req, res, actualPage, queryParams)
    });

    this.app.get('*', (req, res) => {
      return handle(req, res)
    })

    return this.app;
  }

  run() {
    this.app.set('port', process.env.PORT || 3000)
    const server = this.app.listen(this.app.get('port'), () => {
      console.log(`Express running -> ${server.address().port}`);
    });
  }

  stop() {
    // return this.connection.close();
  }
}

const initServer = new Server();

initServer.bootstrap().then(() => {
  initServer.run();
})


