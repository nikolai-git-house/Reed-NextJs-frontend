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
    shipFirstName, shipLastName, shipAddress, shipCity, 
    shipProvinceState, shipPostalZip, shipCountry, 
    shipPhoneNumber
  } = props;

  var merchantAuthenticationType = new ApiContracts.MerchantAuthenticationType();
  merchantAuthenticationType.setName(serverRuntimeConfig.AUTHORIZED_NET_API_LOGIN);
  merchantAuthenticationType.setTransactionKey(serverRuntimeConfig.AUTHORIZED_NET_TRANSACTION_KEY);

  var customerAddress = new ApiContracts.CustomerAddressType();
  customerAddress.setFirstName(shipFirstName);
  customerAddress.setLastName(shipLastName);
  customerAddress.setAddress(shipAddress);
  customerAddress.setCity(shipCity);
  customerAddress.setState(shipProvinceState);
  customerAddress.setZip(shipPostalZip);
  customerAddress.setCountry(shipCountry);
  customerAddress.setPhoneNumber(shipPhoneNumber);

  var createRequest = new ApiContracts.CreateCustomerShippingAddressRequest();
  createRequest.setMerchantAuthentication(merchantAuthenticationType);
  createRequest.setCustomerProfileId(paymentId);
  createRequest.setAddress(customerAddress);  

  //pretty print request
  // console.log(JSON.stringify(createRequest.getJSON(), null, 2));
    
  var ctrl = new ApiControllers.CreateCustomerShippingAddressController(createRequest.getJSON());

  ctrl.execute(function(){

    var apiResponse = ctrl.getResponse();

    var response = new ApiContracts.CreateCustomerShippingAddressResponse(apiResponse);

    //pretty print response
    //console.log(JSON.stringify(response, null, 2));

    if(response != null) 
    {
      if(response.getMessages().getResultCode() == ApiContracts.MessageTypeEnum.OK)
      {
        callback(null, response.getCustomerAddressId());
      }
      else
      {
        //console.log('Result Code: ' + response.getMessages().getResultCode());
        callback(new RequestError(response.getMessages().getMessage()[0].getText()));
      }
    }
    else
    {
      callback(new RequestError('Null response received'));
    }

  });
});

