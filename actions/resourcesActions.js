import { GET } from '../lib/request';

export const INCOMING_RESOURCES = 'INCOMING_RESOURCES';
export const getResources = () => async dispatch => {
  const resp = await GET('/resource')
  dispatch({
    type: INCOMING_RESOURCES,
    data: resp.data
  });
}