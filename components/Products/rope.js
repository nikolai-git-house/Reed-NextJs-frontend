import React, {Component} from 'react'
import logo from '../../static/logo-blue.svg'
import ropeImage from '../../static/reedrope.png'

class Rope extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="column--9">
            <img src={logo} />
            <h2>Rope.</h2>
            <div>
              <h3>Plug-and-play.</h3>
              <p>Comes ready with cord and connectors to plug into a Reed controller.</p>
            </div>
          </div>
          <div className="column--3">
            <img src={ropeImage} />
          </div>
        </div>

      
      </React.Fragment>
    )
  }
}

export default Rope