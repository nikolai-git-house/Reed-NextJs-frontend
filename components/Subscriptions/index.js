import React, {Component} from 'react'

import Subscription from './subscription'
import { subscribe } from '../../actions/subscriptionActions';
import { changeCard } from '../../actions/paymentActions';
import { connect } from 'react-redux';

class Subscriptions extends Component {
  
  constructor(props) {
    super(props)
  }

  subscribe = (accountIndex, {data, paymentProfile, site}) => {
    const account = this.props.accounts[ accountIndex*1 ];
    if(!account) return;
    this.props.dispatch(subscribe({
      data,
      account,
      paymentProfile,
      site
    }))
  }

  changeCard = (accountIndex, {data, paymentProfile}) => {
    const account = this.props.accounts[ accountIndex*1 ];
    if(!account) return;
    return this.props.dispatch(changeCard({
      ...data,
      account,
      paymentProfile
    }))
  }

  render() {

    const { accounts, paymentProfiles } = this.props;

    if(accounts.loading) return <p><i>Loading Subscriptions..</i></p>;

    // get all subscriptions from all accounts
    const sites = !accounts.length ? [] : accounts.reduce((a, b, index) => {
      return [ ...a, ...(b.sites.map(v => ({
        ...v,
        accountIndex: index
      }))) ]
    },[])

    return (
      <div>
        <h3>Subscriptions</h3>
        <hr/>
        {sites.length ? sites.map((v, i) => {
          const { accountIndex, ...site } = v;
          const paymentProfile = paymentProfiles[accountIndex];
          const {owner:email, name} = accounts[accountIndex]
          return (
            <Subscription key={i} 
              paymentProfile={paymentProfile}
              owner={{email, name}}
              site={site} 
              onSubscribe={(params) => this.subscribe(accountIndex, params)} 
              onChangeCard={(params) => this.changeCard(accountIndex, params)} 
            />
          )
        }) : <p>You don't have any subscriptions</p>}
      </div>
    )
  }
}

export default connect()(Subscriptions)