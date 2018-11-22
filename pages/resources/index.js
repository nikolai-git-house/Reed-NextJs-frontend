import React, {Component} from 'react';
import Nav from '../../components/Navbar'
import Slider from '../../components/Slider'
import paperIcon from '../../static/paper.png'
import {connect} from 'react-redux'

import { getResources } from '../../actions/resourcesActions'
import ResourceList from '../../components/Resources/list'


const Marketing = () => {
  return (
   
    <React.Fragment>
        <div className="row">
          <div className="column">

            <a href="#">Click here to download pdf.</a>
            <div className="row">
              <div className="column--3">
                <h3>Reed Core</h3>
                <ul>
                  <li>Instructions for installation</li> 
                  <li>Spec sheet</li>
                  <li>Shipping information sheet</li>
                  <li>BACnet information</li>
                  <li>Installation sheets</li>
                </ul>
              </div>
              <div className="column--3">
                <h3>Reed Bridge</h3>
                <ul>
                  <li>Instructions for installation</li> 
                  <li>Spec sheet</li>
                  <li>Shipping information sheet</li>
                  <li>BACnet information</li>
                  <li>Installation sheets</li>
                </ul>
              </div>
              <div className="column--3">
                <h3>Reed Valve Bank</h3>
                <ul>
                  <li>Instructions for installation</li> 
                  <li>Spec sheet</li>
                  <li>Shipping information sheet</li>
                  <li>BACnet information</li>
                  <li>Installation sheets</li>
                </ul>
              </div>
              <div className="column--3">
                <h3>Reed Wireless</h3>
                <ul>
                  <li>Instructions for installation</li> 
                  <li>Spec sheet</li>
                  <li>Shipping information sheet</li>
                  <li>BACnet information</li>
                  <li>Installation sheets</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </React.Fragment>

  )
}

const mapStateToProps = (state) => {
  return { 
    currentUser: state.auth.currentUser,
    resources: state.resources
  }
}

export default connect(mapStateToProps, null)(class Resources extends Component {

  static async getInitialProps (ctx) {
    await ctx.store.dispatch(getResources());
  }

  render() {

    const { resources } = this.props;

    return (

      <section>
        <div className="__container">
        <Nav user={this.props.currentUser} mode="dark"/>
        
        <Slider tabs={[
        {label: 'Hardware', img: paperIcon, component: <ResourceList resources={resources.filter(v => v.product.type === 'hardware')} />},
        {label: 'Plumbing', img: paperIcon, component: <ResourceList resources={resources.filter(v => v.product.type === 'plumbing')} />},
        {label: 'Accessories', img: paperIcon, component: <ResourceList resources={resources.filter(v => v.product.type === 'accessories')} />},
      ]}/>
        </div>
      </section>

    )
  }
  
})