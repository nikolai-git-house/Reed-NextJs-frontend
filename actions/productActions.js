import { GET } from '../lib/request';

export const INCOMING_PRODUCT = 'INCOMING_PRODUCT';
export const getProductBySlug = (slug) => async dispatch => {
  const resp = await GET(`/product?slug=${slug}`);
  resp.data[0].productInBoxes = await Promise.all(resp.data[0].productInBoxes.map(v => GET(`/productinbox/${v._id}`)))
  resp.data[0].productInBoxes = resp.data[0].productInBoxes.map(v => v.data)
  dispatch({
    type: INCOMING_PRODUCT,
    data: resp.data[0]
  });
}