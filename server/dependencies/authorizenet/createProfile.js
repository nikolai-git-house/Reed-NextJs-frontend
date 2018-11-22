/**
* Create a customer Profile
* Setting, the card as a default
*
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
    userName,
    userEmail,
    cardNumber, cardExpiry, cardCvc,
    cardAddress, cardZip,
    shipFirstName, shipLastName, shipAddress, shipCity, 
    shipProvinceState, shipPostalZip, shipCountry, 
    shipPhoneNumber
  } = props;

  var merchantAuthenticationType = new ApiContracts.MerchantAuthenticationType();
  merchantAuthenticationType.setName(serverRuntimeConfig.AUTHORIZED_NET_API_LOGIN);
  merchantAuthenticationType.setTransactionKey(serverRuntimeConfig.AUTHORIZED_NET_TRANSACTION_KEY);

  var creditCard = new ApiContracts.CreditCardType();
  creditCard.setCardNumber(cardNumber);
  creditCard.setExpirationDate(cardExpiry);
  creditCard.setCardCode(cardCvc);

  var customerAddressType = new ApiContracts.CustomerAddressType();
  customerAddressType.setAddress(cardAddress);
  customerAddressType.setZip(cardZip);

  var paymentType = new ApiContracts.PaymentType();
  paymentType.setCreditCard(creditCard);

  var customerShipping;
  if(shipFirstname){
    customerShipping = new ApiContracts.CustomerAddressType();
    customerShipping.setFirstName(shipFirstName);
    customerShipping.setLastName(shipLastName);
    customerShipping.setAddress(shipAddress);
    customerShipping.setCity(shipCity);
    customerShipping.setState(shipProvinceState);
    customerShipping.setZip(shipPostalZip);
    customerShipping.setCountry(shipCountry);
    customerShipping.setPhoneNumber(shipPhonenumber);
  }

  var customerPaymentProfileType = new ApiContracts.CustomerPaymentProfileType();
  customerPaymentProfileType.setCustomerType(ApiContracts.CustomerTypeEnum.INDIVIDUAL);
  customerPaymentProfileType.setPayment(paymentType);
  customerPaymentProfileType.setBillTo(customerAddressType);
  customerPaymentProfileType.setDefaultPaymentProfile(true);

  var customerProfileType = new ApiContracts.CustomerProfileType();
  customerProfileType.setDescription(userName);
  customerProfileType.setEmail(userEmail);
  customerProfileType.setPaymentProfiles([customerPaymentProfileType]);
  if(shipFirstname) customerProfileType.setShipToList([customerShipping])

  var createRequest = new ApiContracts.CreateCustomerProfileRequest();
  createRequest.setProfile(customerProfileType);
  createRequest.setValidationMode(ApiContracts.ValidationModeEnum.LIVEMODE);
  createRequest.setMerchantAuthentication(merchantAuthenticationType);

  //pretty print request
  //console.log(JSON.stringify(createRequest.getJSON(), null, 2));
  
  var ctrl = new ApiControllers.CreateCustomerProfileController(createRequest.getJSON());

  ctrl.execute(function(){

    var apiResponse = ctrl.getResponse();

    var response = new ApiContracts.CreateCustomerProfileResponse(apiResponse);

    //pretty print response
    // console.log(JSON.stringify(response, null, 2));

    if(response != null) 
    {
      if(response.getMessages().getResultCode() == ApiContracts.MessageTypeEnum.OK)
      {
        callback(null, response.getCustomerProfileId());
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

