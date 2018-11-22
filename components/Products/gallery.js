import React, { Component } from 'react';
import Swipeable from 'react-swipeable'

import { ApiUrl } from '../../config';
import { GalleryContainer } from './style';

export default class ProductGallery extends Component {

  state = {
    index: 0
  }

  interval = null;

  _setTimeout(){
    if(this.interval) clearTimeout(this.interval);
    this.interval = setTimeout(() => {
      this.setState({
        index: this.state.index === (this.props.images.length-1) ? 0 : this.state.index+1
      })
      this._setTimeout();
    },5000);
  }

  componentDidMount(){
    this._setTimeout();
  }

  goto(index){
    
    if(index >= this.props.images.length) return;
    if(index < 0) return;
    if(this.interval) clearTimeout(this.interval);

    this.setState({ index })
    this._setTimeout();
  }

  render(){

    const { images, title } = this.props;
    const { index } = this.state;

    return <GalleryContainer>
      <Swipeable 
        onSwipedLeft={() => this.goto(this.state.index+1)}
        onSwipedRight={() => this.goto(this.state.index-1)}
        className="Images" style={{transform: `translateX(-${index*100}%)`}}>
        {images.map((v,i) => <div className="ImageContainer" style={{
          left: (i*100)+'%'
        }} key={i}><img src={`${ApiUrl}${v.url}`} alt={title} /></div>
      )}</Swipeable>
      <div className="Dots">{images.map((v,i) => <span 
        key={i} 
        onClick={() => this.goto(i)}
        className={i===index ? "Dot active": "Dot"}
      >•</span>)}</div>
      </GalleryContainer>

  }

}