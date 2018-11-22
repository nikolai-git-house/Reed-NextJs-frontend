import React, {Component} from 'react';
import { ShippingItem } from './style';

export default class ShippingSelection extends Component {
  render(){

    const { onUpdate, setShippingForm, shipToList, customerAddressId, onDeleteShipping } = this.props;
    const showDelete = shipToList.length > 1;
    return <div>
      <h3>Select Shipping Address</h3>
      <div>
        {shipToList.map((v,i) => {
          return <ShippingItem key={i}>
            <div 
              className={customerAddressId === v.customerAddressId ? 'shippingAddress active' : 'shippingAddress'}
              onClick={() => onUpdate({
                target: {
                  name: 'customerAddressId',
                  value: v.customerAddressId 
                }
              })}
            >
              <p><b>{v.firstName} {v.lastName}</b></p>
              <p>{v.address}</p>
              <p>{v.city} {v.zip}</p>
              <p>{v.state}, {v.country}</p>
              <p>phone: {v.phoneNumber}</p>
            </div>
            { showDelete ? <button className="btn-danger" onClick={() => onDeleteShipping(v.customerAddressId)}>x</button> : null }
          </ShippingItem>
        })}
        <button className="btn-info" onClick={() => setShippingForm(true)}>Use New Address</button>
      </div>
    </div>
  }
}