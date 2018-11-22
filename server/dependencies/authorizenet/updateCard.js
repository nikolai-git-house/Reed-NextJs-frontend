/**
* Update card is actually add card
* because we don't delete or change data
* card being used is the last updated data.
*/


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
    cardNumber, cardExpiry, cardCvc,
    cardAddress, cardZip,
  } = props;

  var merchantAuthenticationType = new ApiContracts.MerchantAuthenticationType();
  merchantAuthenticationType.setName(serverRuntimeConfig.AUTHORIZED_NET_API_LOGIN);
  merchantAuthenticationType.setTransactionKey(serverRuntimeConfig.AUTHORIZED_NET_TRANSACTION_KEY);

  var creditCard = new ApiContracts.CreditCardType();
  creditCard.setCardNumber(cardNumber);
  creditCard.setExpirationDate(cardExpiry);
  creditCard.setCardCode(cardCvc);

  var paymentType = new ApiContracts.PaymentType();
  paymentType.setCreditCard(creditCard);

  var customerAddress = new ApiContracts.CustomerAddressType();
  customerAddress.setAddress(cardAddress);
  customerAddress.setZip(cardZip);

  var profile = new ApiContracts.CustomerPaymentProfileType();
  profile.setBillTo(customerAddress);
  profile.setPayment(paymentType);
  profile.setDefaultPaymentProfile(true);

  var createRequest = new ApiContracts.CreateCustomerPaymentProfileRequest();
  createRequest.setValidationMode(ApiContracts.ValidationModeEnum.LIVEMODE);
  createRequest.setMerchantAuthentication(merchantAuthenticationType);
  createRequest.setCustomerProfileId(paymentId);
  createRequest.setPaymentProfile(profile);

  //pretty print request
  //console.log(JSON.stringify(createRequest.getJSON(), null, 2));
    
  var ctrl = new ApiControllers.CreateCustomerPaymentProfileController(createRequest.getJSON());

  ctrl.execute(function(){

    var apiResponse = ctrl.getResponse();

    var response = new ApiContracts.CreateCustomerPaymentProfileResponse(apiResponse);

    //pretty print response
    //console.log(JSON.stringify(response, null, 2));

    if(response != null) 
    {
      if(response.getMessages().getResultCode() == ApiContracts.MessageTypeEnum.OK)
      {
        callback(null, response.getCustomerPaymentProfileId());
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
})