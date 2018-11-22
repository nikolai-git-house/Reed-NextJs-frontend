// import subscriptions from '../mockApi/subscriptions'
import { INTERNAL } from '../lib/request';
import { 
  createProfile,
  changeCard
} from './paymentActions';

import { getAccounts } from './authActions';

export const subscribe = ({data, account, paymentProfile, site}) => async (dispatch, state) => {
  
  // create profile
  if(!paymentProfile)
    await dispatch(createProfile({
      ...data,
      account
    }));

  // update card data
  else if(paymentProfile && data.cardaddress)
    await dispatch(changeCard({ ...data, account, paymentProfile }))

  // subscribe
  await INTERNAL.POST(`/accounts/${account.aid}/sites/${site.sid}/subscription`, { isActive: true });

  // refresh accounts data, minus paymentProfiles
  dispatch(getAccounts( false ));

}
