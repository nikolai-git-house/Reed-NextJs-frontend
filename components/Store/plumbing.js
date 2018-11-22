import React, {Component} from 'react'
import StoreItem from './item'



class Plumbing extends Component {
  state = {items:[]}

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      items: nextProps.items
    }
  }



  render() {
    return (
      <React.Fragment>
        <h3>Plumbing Done Right</h3>
        {this.state.items.map((item, i) => {
          return (
            <StoreItem product={item} addToCart={this.props.addToCart} key={i}/>
          )
        })}
      </React.Fragment>
    )
  }
}

export default Plumbing