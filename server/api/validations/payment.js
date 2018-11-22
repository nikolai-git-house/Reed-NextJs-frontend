
module.exports.createProfile = {
  userName: {},
  userEmail: {
    email: true
  },
  cardNumber: {
    presence: { allowEmpty: false },
    format: {
      pattern: /^(34|37|4|5[1-5]).*$/,
      message: function(value, attribute, validatorOptions, attributes, globalOptions) {
        return validate.format("^%{num} is not a valid credit card number", {
          num: value
        });
      }
    },
    length: function(value, attributes, attributeName, options, constraints) {
      if (value) {
        // Amex
        if ((/^(34|37).*$/).test(value)) return {is: 15};
        // Visa, Mastercard
        if ((/^(4|5[1-5]).*$/).test(value)) return {is: 16};
      }
      // Unknown card, don't validate length
      return false;
    }
  },
  cardAddress: {
    presence: { allowEmpty: false }
  }, 
  cardZip: {
    presence: { allowEmpty: false }
  }, 
  cardExpiry: {
    presence: { allowEmpty: false },
    numericality: { onlyInteger: true },
    length: 4
  }, 
  cardCvc: {
    presence: { allowEmpty: false },
    numericality: { onlyInteger: true },
    length: 3
  }
}

module.exports.updateCard = {
  paymentProfileId: {},
  cardNumber: {
    presence: { allowEmpty: false },
    format: {
      pattern: /^(34|37|4|5[1-5]).*$/,
      message: function(value, attribute, validatorOptions, attributes, globalOptions) {
        return validate.format("^%{num} is not a valid credit card number", {
          num: value
        });
      }
    },
    length: function(value, attributes, attributeName, options, constraints) {
      if (value) {
        // Amex
        if ((/^(34|37).*$/).test(value)) return {is: 15};
        // Visa, Mastercard
        if ((/^(4|5[1-5]).*$/).test(value)) return {is: 16};
      }
      // Unknown card, don't validate length
      return false;
    }
  },
  cardAddress: {
    presence: { allowEmpty: false }
  }, 
  cardZip: {
    presence: { allowEmpty: false }
  }, 
  cardExpiry: {
    presence: { allowEmpty: false },
    numericality: { onlyInteger: true },
    length: 4
  }, 
  cardCvc: {
    presence: { allowEmpty: false },
    numericality: { onlyInteger: true },
    length: 3
  }
}

module.exports.createShipping = {
  shipFirstName: { presence: { allowEmpty: false } }, 
  shipLastName: { presence: { allowEmpty: false } }, 
  shipAddress: { presence: { allowEmpty: false } }, 
  shipCity: { presence: { allowEmpty: false } }, 
  shipProvinceState: { presence: { allowEmpty: false } }, 
  shipPostalZip: { presence: { allowEmpty: false } }, 
  shipCountry: { presence: { allowEmpty: false } }, 
  shipPhoneNumber: { presence: { allowEmpty: false } }
}

