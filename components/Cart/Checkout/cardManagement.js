import React, {Component} from 'react';

export default class CardManagement extends Component {
  render(){

    const { paymentProfile, setCardForm } = this.props;

    if(!paymentProfile) return null;
    return <div>
      <h3>Payment Detail</h3>
      <p>Card:&nbsp;
        {paymentProfile.paymentProfiles[0].payment.creditCard.cardType}&nbsp; 
        {paymentProfile.paymentProfiles[0].payment.creditCard.cardNumber}
      </p>
      <button className="btn-info" onClick={() => setCardForm(true)}>Change Card</button>
    </div>
  }
}