import React, {Component} from 'react'

import Nav from '../../components/Navbar'

import Slider from '../../components/Slider'
import SliderLink from '../../components/SliderLink'
import Card from '../../components/Card'

import Router from 'next/router'

import Unauthorized from '../unauthorized'

import cardIcon from '../../static/card.png'
import pencilIcon from '../../static/pencil.png'

import Subscriptions from '../../components/Subscriptions'
import Purchases from '../../components/Purchases'
import Settings from '../../components/Settings'

import Loader from '../../components/Layout/loader'

import {connect} from 'react-redux'

const mapStateToProps = (state) => {
  return { 
    auth: state.auth
  }
}

const mapDispatchToProps = {
}

class RedirectRoute extends Component {
  componentWillMount() {
    Router.push('/unauthorized')
  }
  render() {
    return null
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(class Account extends Component {

  static async getInitialProps({query}) {
    return query;
  }

  state = { sid: null }

  static getDerivedStateFromProps(props, state){
    if(props.auth.currentUser.sid && props.auth.currentUser.sid !== state.sid){
      return { sid: props.auth.currentUser.sid}
    }
    return null;
  }

  tabs = [
    {label: 'Subscriptions', img: cardIcon, href:"/account?tab=subscriptions", id:"subscriptions" },
    {label: 'Purchases', img: cardIcon, href:"/account?tab=purchases", id:"purchases" }
  ]

  getElementByTab = () => {
    const { auth, tab } = this.props;

    switch(tab){
      case 'subscriptions':
        return <Subscriptions paymentProfiles={auth.paymentProfiles} accounts={auth.accounts} />
      case 'purchases':
        return <Purchases />
      default:
        return <Subscriptions paymentProfiles={auth.paymentProfiles} accounts={auth.accounts} />
    }
  }

  render() {

    const { auth, tab } = this.props;
    if(auth.loading) return null;
    if(auth.loading === false && !auth.currentUser.sid) return null;
    
    return <section>
      <div className="__container">
      <Nav user={auth.currentUser} mode="dark"/>
      <SliderLink
        defaultIndex={tab ? Math.max(this.tabs.findIndex(v => v.id === tab),0) : 0}
        tabs={this.tabs}
      />
      <Card>{ this.getElementByTab() }</Card>
      </div>
    </section>
  }
  
})