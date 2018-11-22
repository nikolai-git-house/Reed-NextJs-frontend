import Router from 'express-promise-router';
import { GET, PUT } from '../lib/request';
import validator from '../middlewares/validator'
import subscriptionValidation from './validations/subscriptions';

const router = Router();

router.get('/', async (req,res) => {

  const PortalConnection = req.app.get('PortalConnection');
  const conn = new PortalConnection(req.get('Authorization'));
  const resp = await conn.get('/accounts');
  res.json(resp.data);
})

router.post('/:aid/paymentId/:pid', async (req,res) => {

  const { aid, pid } = req.params;
  const PortalConnection = req.app.get('PortalConnection');
  const conn = new PortalConnection(req.get('Authorization'));
  const resp = await conn.post(`/accounts/${aid}/paymentId/${pid}`);
  res.json(resp.data);
})

router.post('/:aid/sites/:sid/subscription', 
  validator('body', subscriptionValidation.updateSubscription),
  async (req,res) => {

    const { aid, sid } = req.params;
    const PortalConnection = req.app.get('PortalConnection');
    const conn = new PortalConnection(req.get('Authorization'));
    const resp = await conn.post(`/accounts/${aid}/sites/${sid}/subscription`, req.body);
    res.json(resp.data);
  }
)

export default router;