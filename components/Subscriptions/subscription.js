import React, {Component} from 'react'
import Collapsible from 'react-collapsible';
import Form from './form';
import downArrow from '../../static/down.svg';
import upArrow from '../../static/up.svg';

class Subscription extends Component {
  constructor(props) {
    super(props)
  }

  onSubscribe = (data) => {
    const { site, paymentProfile } = this.props;
    this.props.onSubscribe({
      data,
      paymentProfile,
      site
    });
  }

  onChangeCard = ( data ) => {
    const { paymentProfile } = this.props;
    return this.props.onChangeCard({
      data,
      paymentProfile
    });
  }

  
  render() {

    const { site, paymentProfile, owner } = this.props;

    return (
      <div style={{borderBottom: '2px solid #D8D8D8', padding: '2rem'}}>
      <Collapsible lazyRender trigger={
        <div className="row" style={{ cursor: "pointer"}}>
          <div className="column--10">
            <h2>{site.name}</h2>
            <p><small>{site.description}</small></p>
          </div>
          <div className="column"><span>{site.subscription.isActive ? 'ACTIVE' : 'INACTIVE'}</span></div>
          <div className="column"><img src={downArrow} /></div>
        </div>
      }
      triggerWhenOpen={
        <div className="row" style={{cursor: "pointer"}}>
          <div className="column--10">
            <h2>{site.name}</h2>
            <p><small>{site.description}</small></p>
          </div>
          <div className="column"><span>{site.subscription.isActive ? 'ACTIVE' : 'INACTIVE'}</span></div>
          <div className="column"><img src={upArrow} /></div>
        </div>
      }>

      {/*
      - Too much info maybe?
      <p>Site Subscription Status</p>
      <div className="row">
        <div className="column--10">
          <p>Your current subscription is:</p>
        </div>
        <div className="column">
          <p>{site.subscription.isActive ? 'ACTIVE' : 'INACTIVE'}</p>
        </div>
      </div>*/}

      <div className="row">
        <Form 
          isActive={site.subscription.isActive} 
          owner={owner}
          paymentProfiles={paymentProfile ? paymentProfile.paymentProfiles : null} 
          onSubscribe={this.onSubscribe}
          onChangeCard={this.onChangeCard} 
        />
      </div>
      </Collapsible>
      </div>
    )
  }
}

export default Subscription