import React, {Component} from 'react'
import CartItem from './item'
import Router from 'next/router'


class Cart extends Component {

  render() {

    const { cartItems, beforeTax, tax } = this.props;

    return (
    <div className="cart">
      {this.props.checkout == false ? <div className="cart__header">
      <h4>My Cart</h4>
      <button onClick={()=> {Router.push('/shop')}}>Continue Shopping</button>
    </div> : null }


    <div className="cart__body">
      <ul className="cart__body__list">
        {cartItems.length ? cartItems.map((item, i) => {
          return <CartItem 
                    key={i} 
                    lineItem={item}
                    itemIndex={i}
                    quanity={item.quantity} 
                    removeItemFromCart={this.props.removeItemFromCart}
                    updateItemQuantity={this.props.updateItemQuantity} 
                  />
        }) : <p>Cart is empty</p>}
      </ul>
    </div>

    <div className="cart__footer">

      <ul className="cart__footer__prices">
        <li className="cart__footer__prices__price"><span >Subtotal</span><span>${beforeTax}</span></li>
        <li className="cart__footer__prices__price"><span >Tax</span><span>${tax}</span></li>
        <li className="cart__footer__prices__price--final"><span >Total</span><span>${beforeTax+tax}</span></li>
        {this.props.checkout == false ? <li className="cart__footer__prices__checkout"><button onClick={(e) => Router.push('/cart/checkout')}>Checkout</button></li> : null}
        
      </ul>

    </div>

  </div>
    )
  }
}

export default Cart