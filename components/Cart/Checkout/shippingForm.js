import React, {Component} from 'react';

export default class ShippingForm extends Component {
  render(){

    const { 
      paymentProfile, setShippingForm, 
      onUpdate, account,
      distributor 
    } = this.props;

    return <div>
      { distributor ? <div>
        <h3>Shipping Details</h3>
      </div> : <div>
        <h3>Add New Shipping Details</h3>
        <p><small>Set new Address for {account.name}</small></p>
        </div> }
      <form>
        <label>First Name</label>
        <input type="text" name="shipFirstName" onChange={onUpdate} />
        <label>Last Name</label>
        <input type="text" name="shipLastName" onChange={onUpdate} />
        <label>Phone Number</label>
        <input type="text" name="shipPhoneNumber" onChange={onUpdate} />
        <label>Address</label>
        <input type="text" name="shipAddress" onChange={onUpdate} />
        <label>City</label>
        <input type="text" name="shipCity" onChange={onUpdate} />
        <label>Province/State</label>
        <input type="text" name="shipProvinceState" onChange={onUpdate} />
        <label>Postal/ZIP</label>
        <input type="text" name="shipPostalZip" onChange={onUpdate} />
        <label>Country</label>
        <input type="text" name="shipCountry" onChange={onUpdate} />
      </form>
      { paymentProfile.shipToList && paymentProfile.shipToList.length && !distributor ? 
        <button className="btn-danger" onClick={() => setShippingForm(false)}>Use Current Address</button> : 
        null }
    </div>
  }
}