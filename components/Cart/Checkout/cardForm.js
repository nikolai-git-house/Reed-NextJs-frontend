import React, {Component} from 'react';

export default class CardForm extends Component {
  render(){

    const { account, paymentProfile, setCardForm, onUpdate } = this.props;

    return <div>
      <h3>{paymentProfile ? 'Change' : 'Add New'} Credit Card</h3>
      <p><small>Set new Credit Card for {account.name}</small></p>
      <form>
        <label>Card Number</label>
        <input type="text" name="cardNumber" onChange={onUpdate} />
        <label>Address</label>
        <input type="text" name="cardAddress" onChange={onUpdate} />
        <label>Zip</label>
        <input type="text" name="cardZip" onChange={onUpdate} />
        <label>Expiry</label>
        <input type="text" name="cardExpiry" onChange={onUpdate} />
        <label>CVC</label>
        <input type="text" name="cardCvc" onChange={onUpdate} />
      </form>
      { paymentProfile ? <button className="btn-danger" onClick={() => setCardForm(false)}>
        Use Current Card
      </button> : null }
    </div>
  }
}