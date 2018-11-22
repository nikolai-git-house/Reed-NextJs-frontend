import React, {Component} from 'react';

import Layout from '../components/Layout'

import helpers from '../styles/utils/helpers'

import Nav from '../components/Navbar'

import Card from '../components/Card'
import { ContactHeader } from '../components/Contact/style'

import phoneIcon from '../static/contactphone.png'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return { currentUser: state.auth.currentUser }
}

export default connect(mapStateToProps,null)(class Contact extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (

      <section>
        <div className="__container">
          <Nav user={this.props.currentUser} mode="dark" />

          {/*say hi*/}
          <Card>
            <ContactHeader className="row">
              <div className="column--8">
                <h2>Say hi!</h2>
                <p><a href="tel:18771234567">1-877-123-4567</a><br /></p>
                <div className="row">
                  <div className="column--6">
                    <p>
                      Sales<br />
                      <a href="mailto:sales@reedcontrols.com">sales@reedcontrols.com</a>
                    </p> 
                  </div>
                  <div className="column--6">
                    <p>
                      Customer Service
                      <br />
                      <a href="mailto:service@reedcontrols.com">service@reedcontrols.com</a>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="column--6">
                    <p>
                      Tech Support<br />
                      <a href="mailto:help@reedcontrols.com">help@reedcontrols.com</a>
                    </p>
                  </div>
                  <div className="column--6"></div>
                </div>
              </div>
              <div className="column--4 left">
                <div className="floatbox">
                  <img src={phoneIcon} />
                  <p>Based in Toronto, Canada</p>
                </div>
              </div>
            </ContactHeader>
          </Card>


          {/*contact form*/}
          <Card>
            <div className="row">
              <h2>Email us any general questions</h2>
              <br /><br /><br />
              <form>
                <label>Name</label>
                <input type="text" name="name" />
                <label>Email</label>
                <input type="email" name="email" />
                <label>Subject</label>
                <input type="text" name="subject" />
                <label>Industry</label>
                <input type="text" name="industry" />
                <label>How can we help?</label>
                <textarea name="message" placeholder="Let us know what we can help you with, we would be happy to help!" />
                <button>Submit</button>
              </form>
            </div>
          </Card>



        </div>
      </section>

    )
  }
  
})