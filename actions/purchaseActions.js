import { GET } from '../lib/request';

export const INCOMING_ORDERS = 'INCOMING_ORDERS';
export const getOrders = () => async (dispatch, state) => {

  // get all purchases for all accounts
  // result an object:
  // { aid1: OrderArray, aid2: OrderArray,  }

  const {accounts} = state().auth
  if(accounts.loading) return;

  const orders = (await Promise.all(accounts.map(v => {
    
    return GET(`/order?accountId=${v.aid}&_sort=date:desc`)
          .then(resp => ({ [v.aid]: resp.data }));

  }))).reduce((a,b) => ({...a, ...b}),{});

  dispatch({
    type: INCOMING_ORDERS,
    data: orders
  });

}