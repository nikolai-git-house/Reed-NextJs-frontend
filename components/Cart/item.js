import React, {Component} from 'react'
import {ApiUrl} from '../../config'

class CartItem extends Component {

  removeItemFromCart = (e) => {
    e.preventDefault()
    this.props.removeItemFromCart(this.props.itemIndex)
  }

  updateItemQuantity = (e) => {
    e.preventDefault()
    this.props.updateItemQuantity(e.target.value*1, this.props.itemIndex)
  }

  render() {

    const { lineItem } = this.props;
    const { variants, quantity } = lineItem;
    const price = variants.reduce((a,b) => a + (b.price||0),0)

    return (
      <li className="cart__body__list__item">      
        <img src={`${ApiUrl}${lineItem.gallery[0].url}`} alt="" className="itemImg" />

        <div className="cart__body__list__item__meta">
            <p>{`#${lineItem.id}`}</p>
            <h4>{lineItem.title}</h4>
            {variants.length ? <p>{variants.map(v => v.title).join(', ')}</p> : null}
            <div className="cart__body__list__item__meta__quanity">
            <p className="cart__body__list__item__meta__quanity__value">
              <input 
                onChange={this.updateItemQuantity} 
                type="number"
                min={0}
                defaultValue={quantity} 
                /> x {`$${price}`}
            </p> 
            {/* <p className="cart__body__list__item__meta__quanity__status"> In Stock</p> */}
            </div>
        </div>

        <p className="cart__body__list__item__price">{`$${price * quantity}`}</p>
        
        <div className="cart__body__list__item__close">
          <div onClick={this.removeItemFromCart} className="icon__closeIcon"></div>
        </div>
      </li>   
    )
  }
}

export default CartItem