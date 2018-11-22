import React, {Component} from 'react'
import logo from '../../static/logo-blue.svg'
import meterImage from '../../static/reedmeter.png'

class Meter extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="column--9">
            <img src={logo} />
            <h2>Meter.</h2>
            <div>
              <h3>Plug-and-play.</h3>
              <p>Comes ready with cord and connectors to plug into a Reed controller.</p>
            </div>
          </div>
          <div className="column--3">
            <img src={meterImage} />
          </div>
        </div>
      
      </React.Fragment>
    )
  }
}

export default Meter