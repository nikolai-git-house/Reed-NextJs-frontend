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
  
  var getRequest = new ApiContracts.GetCustomerShippingAddressRequest();
  getRequest.setMerchantAuthentication(merchantAuthenticationType);
  getRequest.setCustomerProfileId(paymentId);
  getRequest.setCustomerAddressId(customerAddressId);

  //pretty print request
  //console.log(JSON.stringify(createRequest.getJSON(), null, 2));
    
  var ctrl = new ApiControllers.GetCustomerShippingAddressController(getRequest.getJSON());

  ctrl.execute(function(){

    var apiResponse = ctrl.getResponse();

    var response = new ApiContracts.GetCustomerShippingAddressResponse(apiResponse);

    //pretty print response
    //console.log(JSON.stringify(response, null, 2));

    if(response != null) 
    {
      if(response.getMessages().getResultCode() == ApiContracts.MessageTypeEnum.OK)
      {
        callback(null, response.getAddress());
      }
      else
      {
        callback(new RequestError(response.getMessages().getMessage()[0].getText()));
      }
    }
    else
    {
      callback(new RequestError('Null response received'));
    }

  });
});

