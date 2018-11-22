import Router from 'express-promise-router';
import auth from '../middlewares/auth';
import errorReport from '../middlewares/errorReport';

import accounts from './accounts'
import checkout from './checkout'
import payment from './payment'

const router = Router();
router.use('/accounts', auth, accounts);
router.use('/checkout', auth, checkout);
router.use('/payment', auth, payment);
router.use(errorReport);

export default router;