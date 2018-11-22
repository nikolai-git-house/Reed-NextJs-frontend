import React, {Component} from 'react';

import {default as CartIndex} from '../../components/Cart'

import { connect } from 'react-redux'

import {removeItemFromCart, updateItemQuantity} from '../../actions/cartActions'

const mapStateToProps = (state) => {
  return {
    cart: state.cart.addedItems,
    beforeTax: state.cart.beforeTax,
    tax: state.cart.tax
  }
}

const mapDispatchToProps = {
  removeItemFromCart: (id) => removeItemFromCart(id),
  updateItemQuantity: (quantity, id) => updateItemQuantity(quantity, id)
}


export default connect(mapStateToProps,mapDispatchToProps)(class Cart extends Component {

  render() {
    return (
      <section className="cart __container">
        <div className="__container">
        <CartIndex 
          cartItems={this.props.cart} 
          removeItemFromCart={this.props.removeItemFromCart}
          updateItemQuantity={this.props.updateItemQuantity}
          beforeTax={this.props.beforeTax}
          tax={this.props.tax}
          checkout={false}
        />
        </div>
      </section>
    )
  }
  
})