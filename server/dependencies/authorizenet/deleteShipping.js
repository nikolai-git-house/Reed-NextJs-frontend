import authorizenet from 'authorizenet';
import utils from './utils.js';
import getConfig from 'next/config';
import Bluebird from 'bluebird';
import { RequestError } from '../../lib/CustomError';

const {
  APIContracts:ApiContracts, 
  APIControllers:ApiControllers
} = authorizenet;

export default Bluebird.promisify((props, callback) => {

  const { serverRuntimeConfig } = getConfig();
  const {
    paymentId,
    customerAddressId
  } = props;

  var merchantAuthenticationType = new ApiContracts.MerchantAuthenticationType();
  merchantAuthenticationType.setName(serverRuntimeConfig.AUTHORIZED_NET_API_LOGIN);
  merchantAuthenticationType.setTransactionKey(serverRuntimeConfig.AUTHORIZED_NET_TRANSACTION_KEY);

  var deleteRequest = new ApiContracts.DeleteCustomerShippingAddressRequest();
  deleteRequest.setMerchantAuthentication(merchantAuthenticationType);
  deleteRequest.setCustomerProfileId(paymentId);  
  deleteRequest.setCustomerAddressId(customerAddressId);  

  //pretty print request
  //console.log(JSON.stringify(createRequest.getJSON(), null, 2));
    
  var ctrl = new ApiControllers.DeleteCustomerShippingAddressController(deleteRequest.getJSON());

  ctrl.execute(function(){

    var apiResponse = ctrl.getResponse();

    var response = new ApiContracts.DeleteCustomerShippingAddressResponse(apiResponse);

    //pretty print response
    //console.log(JSON.stringify(response, null, 2));

    if(response != null) 
    {
      if(response.getMessages().getResultCode() == ApiContracts.MessageTypeEnum.OK)
      {
        callback(null, true)
      }
      else
      {
        //console.log('Result Code: ' + response.getMessages().getResultCode());
        callback(new RequestError(response.getMessages().getMessage()[0].getText()))
      }
    }
    else
    {
      callback(new RequestError('Null response received'))
    }

  });
});
