import React, {Component} from 'react'
import LazyLoad from 'react-lazyload'
import Loader from '../Layout/loader'

import {ApiUrl} from '../../config'

class StoreItem extends Component {

  constructor(props) {
    super(props)
    this.state = {
      variants: props.product && props.product.variants.length ? this.getVariantsDefault(props.product.variants) : null,
      isReady: false
    }
  }

  getVariantsDefault(variants){
    return [ ...(new Set(variants.map(v => v.type))) ].reduce((a,b) => {

      a[b] = variants.filter(v => v.type === b)[0];
      return a;

    },{})
  }

  getVariantsByType(variants){
    return [ ...(new Set(variants.map(v => v.type))) ].reduce((a,b) => {

      a[b] = variants.filter(v => v.type === b);
      return a;

    },{})
  }

  getPriceByVariant(){
    if(!this.state.variants) return 0;
    return Object.keys(this.state.variants)
          .reduce((a,b) => a + (this.state.variants[b].price||0),0)
  }

  componentDidMount() {

    this.setState({
      isReady: true,
    });

  }

  handleAddToCart = (e) => {
    if(!this.state.variants) return;
    e.preventDefault()
    this.props.addToCart({
      ...this.props.product, 
      variants: Object.keys(this.state.variants)
                .filter(v => this.state.variants[v])
                .map(v => this.state.variants[v])
    })
    this.setState({
      variant: null
    })
  }

  handleVariantPick = (e) => {
    const variant = this.props.product.variants.find(v => v._id === e.target.value);
    this.setState({
      variants: {
        ...this.state.variants,
        [ variant.type ]: variant
      }
    })
  }
  
  render() {

    const { product } = this.props;
    const { variants } = this.state;
    const variantsType = product.variants.length ? [ ...(new Set(product.variants.map(v => v.type))) ] : [];
    const variantsByType = this.getVariantsByType(product.variants);

    return (
      this.state.isReady ? (
      <LazyLoad once={true} height={200} offset={[-200, 0]} placeholder={<Loader />} debounce={500}>
      <div style={{borderBottom: '2px solid #D8D8D8'}} className="row">
        <div className="column--2">
          
          <img style={{
            width: '70%',
            display: 'block',
            margin: '0 auto'
            }} src={`${ApiUrl}${product.gallery[0].url}`}/>
          
          <p style={{textAlign: 'center', fontWeight: '700'}}>{this.props.product.title}</p>
        </div>
        <div className="column--7">
          <p style={{
            paddingTop: '10px'
          }}>{product.description}</p>
          <form>{variantsType.map((type) => 
            variantsByType[type].map((v,i) => (
              <div key={`${type}_${i}`} style={{display: 'inline-block', marginRight: '7%', textAlign: 'center'}}>
                <div><label htmlFor={`${type}_${i}`}>{v.title}</label></div>
                <div>
                  <input 
                    id={`${type}_${i}`}
                    type="radio" 
                    onChange={this.handleVariantPick}
                    name={`${type}_${i}`} 
                    value={v._id}
                    checked={variants[type] && variants[type]._id === v._id}  />
                </div> 
              </div>
            )
          ))}</form>
        </div>
        <div className="column">
          <p style={{
            fontSize: '36px',
            textAlign: 'center'
          }}>${(this.getPriceByVariant()) || 0}</p>
          <button 
            onClick={this.handleAddToCart}
            style={{
              display: 'block',
              margin: '0 auto'
            }}
          >Add To Cart</button>
        </div>
      </div>
      </LazyLoad>) : (
        <div>
          <Loader />
        </div>
      )
    )
  }
}

export default StoreItem