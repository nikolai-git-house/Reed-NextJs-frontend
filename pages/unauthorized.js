import React, {Component} from 'react';


import Nav from '../components/Navbar'

import Card from '../components/Card'

import { connect } from 'react-redux'



const mapStateToProps = (state) => {
  return { 
    currentUser: state.auth.currentUser
  }
}


export default connect(mapStateToProps, null)(class Shop extends Component {
  


  render() {
    return (
        <section>
          <Nav mode="dark"/>
          <Card>
            <h2>You're not logged in.</h2>
            <p>To purchase through the online store, you must create an account.  It’s free and unlocks regional pricing.</p>
          </Card>

        </section>
    )
  }
  
})