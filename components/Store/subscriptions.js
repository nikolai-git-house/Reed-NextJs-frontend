import React, {Component} from 'react'
import Router from 'next/router'

class SubscriptionShop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      subscriptions: []
    }
  }

  render() {
    return (
      <React.Fragment>
        
        <div className="row">

          <div className="column">
            <h3>Lite</h3>
            <h2>$10<span>/month</span></h2>
            <p>For 1-4 Reed devices</p>
          </div>

          <div className="column">
            <h3>Premier</h3>
            <h2>$30<span>/month</span></h2>
            <p>For 5-9 Reed devices</p>
          </div>

          <div className="column">
            <h3>Enterprise</h3>
            <p>Starting at</p>
            <h2>$100<span>/month</span></h2>
            <p>For UNLIMITED Reed devices</p>
          </div>



        </div>

        <hr />

        <h2>All systems include:</h2>

        <div className="row">

          <div className="column">

            <ul>
              <li>- Cloud based remote dashboard access</li>
              <li>- Fixture control</li>
              <li>- Cloud security & updates</li>
              <li>- Firmware updates(remote device management)</li>
              <li>- Sub-User roles and permissions</li>
            </ul>

          </div>

          <div className="column">

            <ul>
              <li>- Customer support</li>
              <li>- Automated scenes, alerts & notifications</li>
              <li>- Valve grouping</li>
              <li>- High water use alerts</li>
              <li>- Water meter reports and invoices</li>
            </ul>

          </div>

        </div>

        <div className="row">
          <h2>Subscriptions are per building. Go to your subscriptions manager to subscribe a location</h2>
          <button onClick={()=> Router.push('/account')}>Click Me</button>
        </div>

      </React.Fragment>
    )
  }
}

export default SubscriptionShop