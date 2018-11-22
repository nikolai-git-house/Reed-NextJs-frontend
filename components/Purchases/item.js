import React, { Component } from 'react';
import moment from 'moment';

import { ApiUrl } from '../../config';

export default class PurchaseItem extends Component {

  state = {
    active: false
  }

  render(){

    const { className, order } = this.props;
    const { active } = this.state;

    return <div className={active  ? `${className} active` : className} >
      
      <div className="flex purchase-item-header" onClick={() => this.setState({ active: !active })}>
        <div className="left">
          <h4>{order.invoiceNumber}</h4>
          <p><small>Purchase created on {moment(order.date).format('ll')}</small></p>
          <p><span>Status: {order.status}</span></p>
        </div>
        <div className="right">
          <h4>${order.total}</h4>
          <p><small>with ${order.tax} as tax</small></p>
        </div>
      </div>

      <div className="flex purchase-item-content">
        <div className="left">

          {order.ordereditems.map((v,i) => {
            return <div className="flex">
              <div className="left img"><img src={`${ApiUrl}${v.productImage}`} /></div>
              <div className="right">
                <h4>{v.productName}</h4>
                <p>{v.variantName}</p>
                <p><small>{v.quantity} x ${v.price}</small></p>
              </div>
            </div>
          })}

        </div>
        <div className="right">
          <h4>Shipping</h4>
          <p>{order.firstName} {order.lastName}</p>
          <p><small>{order.phoneNumber}</small></p>
          <p className="address">{order.address}</p>
          <p>{order.city} {order.zip}</p>
          <p>{order.state} {order.country}</p>
        </div>
      </div>
    </div>

  }

}