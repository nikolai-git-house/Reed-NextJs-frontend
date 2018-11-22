module.exports.post = {
  userId: {
    presence: { allowEmpty: false }
  },
  accountId: {
    presence: { allowEmpty: false }
  },
  paymentId: {
    presence: { allowEmpty: false }
  },
  paymentProfileId: {
    presence: { allowEmpty: false }
  },
  customerAddressId: {
    presence: { allowEmpty: false }
  },
  invoiceNumber : {
    presence: { allowEmpty: false }
  },
  ordereditems : {
    presence: { allowEmpty: false },
    each: { presence: { allowEmpty: false } }
  },
  beforeTax: {
    presence: { allowEmpty: false },
    numericality: { onlyInteger: false }
  },
  tax: {
    presence: { allowEmpty: false },
    numericality: { onlyInteger: false }
  },
  total: {
    presence: { allowEmpty: false },
    numericality: { onlyInteger: false }
  },
  description: {
    presence: { allowEmpty: false }
  },
  date:{
    presence: { allowEmpty: true }
  },
  accountType: {
    presence: { allowEmpty: false },
    inclusion: { within: ['regular'] }
  }
}