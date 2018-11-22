

import Router from 'express-promise-router';
import { GET, PUT } from '../lib/request';
import validator from '../middlewares/validator'
import paymentValidation from './validations/payment';

const router = Router();

router.get('/:pid', async (req,res,next) => {
  const authorizenet = req.app.get('authorizenet');
  res.json(await authorizenet.getProfile(req.params.pid));
});

router.post('/',
  validator('body', paymentValidation.createProfile),
  async (req,res,next) => {

    const authorizenet = req.app.get('authorizenet');
    const profileId = await authorizenet.createProfile(req.body);
    res.json(await authorizenet.getProfile(profileId));
  }
)

router.put('/:pid',
  validator('body', paymentValidation.updateCard),
  async (req,res,next) => {

    const authorizenet = req.app.get('authorizenet');
    const paymentProfileId = await authorizenet.updateCard({ paymentId: req.params.pid, ...req.body });
    res.json({
      paymentProfileId,
      profile: await authorizenet.getProfile(req.params.pid)
    });
  }
)

router.post('/:pid/shipping',
  validator('body', paymentValidation.createShipping),
  async (req,res,next) => {
  
    const authorizenet = req.app.get('authorizenet');
    const customerAddressId = await authorizenet.createShipping({ 
      paymentId: req.params.pid, 
      ...req.body 
    });

    res.json({
      customerAddressId,
      profile: await authorizenet.getProfile(req.params.pid)
    });
  }
)

router.delete('/:pid/shipping/:customerAddressId',async (req,res,next) => {
  
  const authorizenet = req.app.get('authorizenet');
  await authorizenet.deleteShipping({
    paymentId: req.params.pid, 
    customerAddressId: req.params.customerAddressId
  });
  res.json({
    profile: await authorizenet.getProfile(req.params.pid)
  });
})


export default router;