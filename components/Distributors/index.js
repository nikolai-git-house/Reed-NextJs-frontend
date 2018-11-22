import React, {Component} from 'react'


import Distributor from './distributor'


class Distributors extends Component {
  constructor(props) {
    super(props)
    this.state = {
      distributors: [
        {
          name:'NEXT Plumbing & Hydronics',
          address: '161 Cidermill, Concord, Ontario',
          website: ''
        },
        {
          name:'Noble Trade',
          address: '4100 Jane St, Vaughan, Ontario',
          website: ''
        }
      ]
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="column--6">
            <form>
              <label>Postal Code/Zip Code</label>
              <input style={{width: '80%', marginRight: '2rem'}} type="text" name="postalzip"/>
              <p>Available in North America only</p>
            </form>
          </div>
          <div className="column">
            {this.state.distributors.length ? this.state.distributors.map((company, i) => {
              return <Distributor key={i} distributor={company} />
            }) : <p>No distributors</p>}
          </div>
        </div>
        <hr />
        <h2>Let us help you out.</h2>
        <p>If you need any design or purchase information, get in touch.</p>
        <p>Toll - Free: 1-800-123-REED</p>
        <p>Email: Sales@reedcontrols.com</p>
      </React.Fragment>
    )
  }
}

export default Distributors