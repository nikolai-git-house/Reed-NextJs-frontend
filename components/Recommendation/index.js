import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ReccomendationContainer } from './style';
import { ApiUrl } from '../../config';

const getRandomItem = (arr, exclude) => {
  
  if(!arr.length) return null;
  const item = arr.splice(Math.round(Math.random() * arr.length), 1);
  
  if(!item[0]) return null;
  if(exclude && item[0]._id === exclude) return getRandomItem(arr, exclude);
  return item[0];

}

class Recommendation extends Component {

  state = {
    items: null
  }

  static getDerivedStateFromProps(props, state){
    if(state.items || !props.items) return null;

    const arr = [ ...props.items ];

    // get random items
    const items = [ ...Array(3).keys() ].map(v => getRandomItem(arr, props.exclude)).filter(v => v);
    return { items };
  }

  render(){
    const { items } = this.state;
    if(!items) return null;
    if(!items.length) return null;


    return <ReccomendationContainer>
      <h2>Recommended</h2>
      <div className="Items">
        {items.map((item,i) => {

          // isNew is being simulated
          const isNew = i === 0;

          return <div key={i} className="ItemBox">
            <div className="Item">
              <div className={isNew ? "Image new" : "Image"}><img src={`${ApiUrl}/${item.gallery[0].url}`} /></div>
              { isNew ? <div className="New">New</div> : null }
              <div className="Text">
                <h2>{item.title}{ isNew ?<span className="New">New</span>: null }</h2>
                <h3>{item.description}</h3>
              </div>
            </div>
          </div>

        })}
      </div>
    </ReccomendationContainer>
  }

}

export default connect(state => ({
  items: state.shop ? state.shop.items : []
}))(Recommendation)