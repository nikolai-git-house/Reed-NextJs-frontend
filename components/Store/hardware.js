import React, {Component} from 'react'
import StoreItem from './item'

class Hardware extends Component {
  state = {items:[]}

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      items: nextProps.items
    }
  }

  handleAddToCart(item, e) {
    e.preventDefault()
    this.props.addToCart(item)
  }
  
  render() {
    return (
      <React.Fragment>
        <h3>High Quality Hardware</h3>
        {this.state.items.map((item, i) => {
          return (
            <StoreItem product={item} addToCart={this.props.addToCart} key={i}/>
          )
        })}
      </React.Fragment>
    )
  }
}

export default Hardware