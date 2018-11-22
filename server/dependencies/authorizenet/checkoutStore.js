/**
* Charge a customer profile for a store purchase
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
    paymentId,
    paymentProfileId,
    customerAddressId,
    beforeTax, tax, total, invoiceNumber, description,
    ordereditems
  } = props;

  var merchantAuthenticationType = new ApiContracts.MerchantAuthenticationType();
  merchantAuthenticationType.setName(serverRuntimeConfig.AUTHORIZED_NET_API_LOGIN);
  merchantAuthenticationType.setTransactionKey(serverRuntimeConfig.AUTHORIZED_NET_TRANSACTION_KEY);

  var profileToCharge = new ApiContracts.CustomerProfilePaymentType();
  profileToCharge.setCustomerProfileId(paymentId);

  var paymentProfile = new ApiContracts.PaymentProfile();
  paymentProfile.setPaymentProfileId(paymentProfileId);

  profileToCharge.setPaymentProfile(paymentProfile);
  profileToCharge.setShippingProfileId(customerAddressId);

  var orderDetails = new ApiContracts.OrderType();
  orderDetails.setInvoiceNumber(invoiceNumber);
  orderDetails.setDescription(description);

  var taxAmount = new ApiContracts.ExtendedAmountType();
  taxAmount.setAmount(tax*1);
  taxAmount.setName('tax');

  var lineItemList = ordereditems.map(item => {
    const lineItem = new ApiContracts.LineItemType();
    lineItem.setItemId(item.product);
    lineItem.setName(item.productName);
    lineItem.setDescription(item.variantName);
    lineItem.setQuantity(item.quantity*1);
    lineItem.setUnitPrice(item.price*1);    
    return lineItem
  });

  var lineItems = new ApiContracts.ArrayOfLineItem();
  lineItems.setLineItem(lineItemList);

  var transactionRequestType = new ApiContracts.TransactionRequestType();
  transactionRequestType.setTransactionType(ApiContracts.TransactionTypeEnum.AUTHCAPTURETRANSACTION);
  transactionRequestType.setProfile(profileToCharge);
  transactionRequestType.setAmount(beforeTax*1);
  transactionRequestType.setTax(taxAmount);
  transactionRequestType.setLineItems(lineItems);
  transactionRequestType.setOrder(orderDetails);
  // transactionRequestType.setShipping(shipping);

  var createRequest = new ApiContracts.CreateTransactionRequest();
  createRequest.setMerchantAuthentication(merchantAuthenticationType);
  createRequest.setTransactionRequest(transactionRequestType);

  //pretty print request
  // console.log(JSON.stringify(createRequest.getJSON(), null, 2));
    
  var ctrl = new ApiControllers.CreateTransactionController(createRequest.getJSON());

  ctrl.execute(function(){

    var apiResponse = ctrl.getResponse();

    var response = new ApiContracts.CreateTransactionResponse(apiResponse);

    //pretty print response
    // console.log(JSON.stringify(response, null, 2));

    if(response != null){
      if(response.getMessages().getResultCode() == ApiContracts.MessageTypeEnum.OK){
        if(response.getTransactionResponse().getMessages() != null){

          callback(null, response.getTransactionResponse().getTransId());
        }
        else {
          if(response.getTransactionResponse().getErrors() != null){
            callback(new RequestError(response.getTransactionResponse().getErrors().getError()[0].getErrorText()));
          }
        }
      }
      else {
        if(response.getTransactionResponse() != null && response.getTransactionResponse().getErrors() != null){
          callback(new RequestError(response.getTransactionResponse().getErrors().getError()[0].getErrorText()));
        }
        else {
          callback(new RequestError(response.getMessages().getMessage()[0].getText()));
        }
      }
    }
    else {
      callback(new RequestError('Null Response.'));
    }

  });
})
