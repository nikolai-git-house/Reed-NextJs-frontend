import React, {Component} from 'react';

import Slider from '../components/Slider'
import Nav from '../components/Navbar'
import Loader from '../components/Layout/loader'




import paperIcon from '../static/paper.png'
import pencilIcon from '../static/pencil.png'
import listIcon from '../static/list.png'

import SubscriptionShop from '../components/Store/subscriptions'
import Hardware from '../components/Store/hardware'
import Plumbing from '../components/Store/plumbing'
import Accessories from '../components/Store/accessories'
import { connect } from 'react-redux'

import {getShopItems} from '../actions/shopActions'
import {addItemToCart} from '../actions/cartActions'
import {getUser} from '../actions/authActions'



import {filterItemTypes} from '../selectors/shopSelectors'

const mapStateToProps = (state) => {
  return { 
    items: state.shop,
    hardware: state.shop.items.filter(item => item.type === 'hardware'),
    plumbing: state.shop.items.filter(item => item.type === 'plumbing'),
    accessories: state.shop.items.filter(item => item.type === 'accessories'),
    subscriptions: state.shop.items.filter(item => item.type === 'SUBSCRIPTION'),
    loading: state.shop.loading,
    currentUser: state.auth.currentUser
  }
}

const mapDispatchToProps = {
  addItemToCart: (product) => addItemToCart(product)
}

export default connect(mapStateToProps, mapDispatchToProps)(class Shop extends Component {

  static async getInitialProps({store}) {
    await store.dispatch(getShopItems());
  }

  render() {
    return (
        <section>
          <div className="__container">
          <Nav user={this.props.loading ? null : this.props.currentUser} mode="dark"/>
          {this.props.loading ? <Loader /> : <Slider tabs={[
            {label: 'Hardware', img: paperIcon, component: <Hardware addToCart={this.props.addItemToCart} items={this.props.hardware}/>},
            {label: 'Plumbing', img: pencilIcon, component: <Plumbing addToCart={this.props.addItemToCart} items={this.props.plumbing}/>},
            {label: 'Accessories', img: listIcon, component: <Accessories addToCart={this.props.addItemToCart} items={this.props.accessories}/>},
            {label: 'Subscriptions', img: listIcon, component: <SubscriptionShop items={this.props.subscriptions} />}
          ]}/>}
          </div>
        </section>
    )
  }
  
})