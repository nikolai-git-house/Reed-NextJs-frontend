import React, {Component} from 'react';
import Router from 'next/router'
import Link from 'next/link'

import Layout from '../components/Layout'
import Nav from '../components/Navbar'
import buildingIcon from '../static/building.png'
import buyonlineIcon from '../static/buyonline.png'

import Card from '../components/Card'
import { ContactHeader } from '../components/Contact/style'

import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {currentUser: state.auth.currentUser }
}


export default connect(mapStateToProps,null)(class HowToBuy extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (

      <section>
        <div className="__container">
          <Nav user={this.props.currentUser} mode="dark" />

          {/*Automation. Simplified.*/}
          <Card>
            <div className="row">
              <div className="column--6">
                <h2>Automation. Simplified.</h2>
                <ol style={{listStylePosition: 'inside'}}>
                  <li>Design a System</li>
                  <li>Pick the product & install</li>
                </ol>
                <p>Then begin control.</p>
                <br />
                <br />
                <br />
                <br />
                <p>We're here to help along the way - <Link to="/contact">Contact Us</Link></p>
              </div>
              <div className="column--6">
                <img src={buildingIcon} />
              </div>
            </div>
          </Card>

          {/*Find your nearest place to buy*/}
          <Card>
            <h2>Find your nearest place to buy</h2>
            <div className="row">
              <div className="column--5">
                <label>Enter Postal Code/Zip Code</label>
                <input type="text" />
                <small>Available in North America Only</small>
              </div>
              <div className="column--1"></div>
              <div className="column--6">
                <div><label>List of Distributors</label></div>
                
                <div className="row" style={{marginTop: 8, marginBottom: 8}}>
                  <div className="column--8">
                    <b>NEXT Plumbing & Hydronics</b><br />
                    <small>161 Cidermill, Concord, Ontario</small>
                  </div>
                  <div className="column--4">
                    <a target="_blank" href="http://asdf.com">Website</a>
                  </div>
                </div>

                <div className="row" style={{marginTop: 8, marginBottom: 8}}>
                  <div className="column--8">
                    <b>Plumbing & Hydronics</b><br />
                    <small>162 Cidermill, Concord, Ontario</small>
                  </div>
                  <div className="column--4">
                    <a target="_blank" href="http://asdf.com">Website</a>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <div className="row">
              <div className="column--6">
                <h2>Create an account.</h2>
                <p>To buy online, please create an account.</p>
                <p>Integrator? Log in to process shipment/orders.</p>
              </div>
              <div className="column--6">
                <img src={buyonlineIcon} style={{
                  display: 'block',
                  position: 'relative',
                  top: '50%',
                  margin: '0 auto',
                  width: 183,
                  transform: 'translateY(-50%)'
                }} />
              </div>
            </div>
          </Card>


        </div>
      </section>

    )
  }
  
})