import authorizenet from 'authorizenet';
import utils from './utils.js';
import getConfig from 'next/config';
import Bluebird from 'bluebird';
import { RequestError } from '../../lib/CustomError';

const {
  APIContracts:ApiContracts, 
  APIControllers:ApiControllers
} = authorizenet;

export default Bluebird.promisify((paymentId, callback) => {

  const { serverRuntimeConfig } = getConfig();

  var merchantAuthenticationType = new ApiContracts.MerchantAuthenticationType();
  merchantAuthenticationType.setName(serverRuntimeConfig.AUTHORIZED_NET_API_LOGIN);
  merchantAuthenticationType.setTransactionKey(serverRuntimeConfig.AUTHORIZED_NET_TRANSACTION_KEY);

  var getRequest = new ApiContracts.GetCustomerProfileRequest();
  getRequest.setCustomerProfileId(paymentId);
  getRequest.setMerchantAuthentication(merchantAuthenticationType);

  //pretty print request
  //console.log(JSON.stringify(createRequest.getJSON(), null, 2));
    
  var ctrl = new ApiControllers.GetCustomerProfileController(getRequest.getJSON());

  ctrl.execute(function(){

    var apiResponse = ctrl.getResponse();

    var response = new ApiContracts.GetCustomerProfileResponse(apiResponse);

    //pretty print response
    // console.log(JSON.stringify(response, null, 2));

    if(response != null) 
    {
      if(response.getMessages().getResultCode() == ApiContracts.MessageTypeEnum.OK)
      {

        callback(null, response.getProfile())

      }
      else
      {
        //console.log('Result Code: ' + response.getMessages().getResultCode());
        callback(new RequestError(response.getMessages().getMessage()[0].getText()))
      }
    }
    else
    {
      callback(new RequestError('Null response received'));
    }

  });
});
