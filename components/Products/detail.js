import React, {Component} from 'react'
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

import {ProductDetailContent} from './style';
import Card from '../Card'
import ProductGallery from './gallery';
import {ApiUrl} from '../../config';

export default class ProductDetail extends Component{

  renderList = ( str ) => {
    if(!str) return ''
    return str.split('\n').map((v,i) => <p key={i}>{v}</p>)
  }

  render(){

    const {
      type,
      title,
      description,
      gallery,
      productInfo,
      highlights,
      systemLocation,
      dimensions,
      communication,
      systemRequirements,
      general,
      workingConditions,
      productInBoxes
    } = this.props.product;

    return <Card>
      <ProductDetailContent>

        <div className="ProductBreadcrum">{type}<span className="Separator">&gt;</span><span className="Blue">{title}</span></div>
        <div className="Hero">
          <div className="left">
            <h2 className="Title">{title}</h2>
            <h3 className="Description">{description}</h3>

            <div className="Contact">
              <p>
                <span>Need Help Buying?</span>
                <Link href="/contact"><a>Contact Us</a></Link>
              </p>
              <Link href="/store"><button>Buy Now</button></Link>
            </div>

          </div>
          <div className="right">
            {gallery && gallery.length && <ProductGallery images={gallery} title={title} />}
          </div>
        </div>

        <div className="Contact-Mobile">
          <p>
            <span>Need Help Buying?</span>
            <Link href="/contact"><a>Contact Us</a></Link>
          </p>
          <Link href="/store"><button>Buy Now</button></Link>
        </div>

        <div className="ProductInfo">
          <h2>Product Information.</h2>
          <ReactMarkdown source={productInfo||''} />
        </div>

        <div className="DetailTable">
          <div className="left">Highlights</div>
          <div className="right">{ this.renderList(highlights) }</div>
        </div>

        <div className="DetailTable">
          <div className="left">System Location</div>
          <div className="right">
            <p style={{ marginBottom: '13px'}}>Where in your system would this typically be located</p>
            {systemLocation && systemLocation.url && <img src={`${ApiUrl}${systemLocation.url}`} />}
          </div>
        </div>

        <div className="DetailTable">
          <div className="left">Dimensions</div>
          <div className="right">
            {dimensions && dimensions.url && <img src={`${ApiUrl}${dimensions.url}`} />}
          </div>
        </div>

        <div className="DetailTable">
          <div className="left">Communication</div>
          <div className="right">
            {this.renderList(communication)}
          </div>
        </div>

        <div className="DetailTable">
          <div className="left">System Requirements</div>
          <div className="right">
            {this.renderList(systemRequirements)}
          </div>
        </div>

        <div className="DetailTable">
          <div className="left">General</div>
          <div className="right">
            {this.renderList(general)}
          </div>
        </div>

        <div className="DetailTable">
          <div className="left">Working Conditions</div>
          <div className="right">
            {this.renderList(workingConditions)}
          </div>
        </div>

        <div className="Inthebox">
          <p><b>In The Box</b></p>
          <div className="items">
            {productInBoxes && productInBoxes.map((v,i) => <div key={i} className="item">
              <img src={`${ApiUrl}${v.image.url}`} />
              <p>{v.title}</p>
            </div>)}
          </div>
        </div>

      </ProductDetailContent>
    </Card>

  }

}