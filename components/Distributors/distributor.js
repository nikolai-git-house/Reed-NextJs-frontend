import React, {Component} from 'react'



class Distributor extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="column--10">
            <h3>{this.props.distributor.name}</h3>
            <p>{this.props.distributor.address}</p>
          </div>
          <div className="column">
            <p><a href={this.props.distributor.website}>Website</a></p>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Distributor