import React, {Component} from 'react'
import {CardWrapper} from './style'

class Card extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <CardWrapper>
        {this.props.children}
      </CardWrapper>
    )
  }
}

export default Card