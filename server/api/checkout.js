import Router from 'express-promise-router';
import { GET, PUT } from '../lib/request';
import validator from '../middlewares/validator'
import checkoutValidation from './validations/checkout';

const router = Router();

router.post('/',
  validator('body',checkoutValidation.post),
  async (req,res) => {

    const authorizenet = req.app.get('authorizenet');
    
    req.body.transactionId = await authorizenet.checkoutStore(req.body);

    // get shipping address
    const address = await authorizenet.getCustomerAddress(req.body);

    // create ordered items
    const backend = req.app.get('backend');
    req.body.ordereditems = await Promise.all(req.body.ordereditems.map(async v => {
      const resp = await backend.post('/ordereditem', v);
      return resp.data._id
    }));

    // create order
    const resp = await backend.post('/order', { ...req.body, ...address });
    res.json(resp.data);
    
  }
)

export default router;
