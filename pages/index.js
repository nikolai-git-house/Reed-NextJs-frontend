import React, { Component } from "react";

import Nav from "../components/Navbar";
import Layout from "../components/Layout";

import holdingIpadImg from "../static/holdingipad.png";

import pointIpadImg from "../static/pointingipad.png";
import holdingIphoneImg from "../static/holdingiphone.png";
import iphoneImg from "../static/iphone.png";
import reedcorecloudImg from "../static/reedcorecloud.png";
import reedcoreImg from "../static/reedcore.png";
import reedvalveImg from "../static/reedvalve.png";
import reedmeterImg from "../static/reedmeter.png";
import reedropeImg from "../static/reedrope.png";

import { connect } from "react-redux";

class Index extends Component {
  static async getInitialProps({ store }) {
    // console.log(store.getState())
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <section className="main">
          <div className="__container">
            <Nav user={this.props.currentUser} />
            <div className="row">
              <div className="column--7 contentcontainer">
                <h1>Simple water management for commercial property.</h1>
                <h3>
                  Commercial level products - to control & view any valve, meter
                  and sensor.{" "}
                </h3>
                <h3>
                  This makes turning water on & off simple - from any device,
                  anywhere.
                </h3>
                <button>Test Button</button>
              </div>
              <div className="column--5 imgcontainer">
                <img
                  className="ipadholding"
                  src={holdingIpadImg}
                  style={{ marginLeft: "4rem" }}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="second">
          <h1 className="header">What We Do.</h1>
        </section>
        <section className="section content">
          <div className="__container">
            <div className="row">
              <div className="column--6 hand">
                <img
                  className="ipadholding"
                  src={pointIpadImg}
                  style={{ width: "78%", marginTop: 20 }}
                />
              </div>
              <div className="column--6">
                <p>Valve Control</p>
                <h1>Shut water immediately.</h1>
                <p>
                  When emergiencies happen, turning water off in seconds can
                </p>
                <p>
                  Use our dashboard to quickly isolate water. From the main
                  supply to risers and zones, shutting water is made simple.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section content">
          <div className="__container">
            <div className="row">
              <div className="column--6">
                <img src={iphoneImg} style={{ width: "90%", marginTop: 50 }} />
              </div>
              <div className="column--6">
                <p>Leak Detection & Sensors</p>
                <h1>Smart, powerful detection.</h1>
                <p>
                  Most common areas that hold high value assets are also often
                  unmonitored. Protect your critical areas with leak detection
                  pads.
                </p>
                <p>
                  And use other temperature and pressure sensors to understand
                  and optimize your system.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section content">
          <div className="__container">
            <div className="row">
              <div className="column--6 hand">
                <img
                  src={holdingIphoneImg}
                  style={{ width: "55%" }}
                  className="ipadholding"
                />
              </div>
              <div className="column--6">
                <p>Water Conservation</p>
                <h1>Water use without being complicated.</h1>
                <p>
                  High water consumption is always caught too late. You’ll be
                  alerted when water use is above average.
                </p>
                <p>Or use it to sub-meter your tenants.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section content last">
          <div className="__container">
            <div className="row">
              <div className="column--6">
                <p>Flexible Products</p>
                <h1>Every property is different, we get it.</h1>
                <p>
                  Our product features allow customers to scale their devices
                  and choose the right fixtures for the environent.
                </p>
                <p>Whatever your goals, we have devices for it.</p>
              </div>
              <div className="column--6">
                <img
                  src={reedcorecloudImg}
                  style={{ width: "80%", float: "right" }}
                />
              </div>
            </div>
            <div className="row">
              <div style={{ flex: 1, textAlign: "center", marginBottom: 30 }}>
                <button style={{ width: "70%", height: 50 }}>
                  Test Button
                </button>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { currentUser: state.auth.currentUser };
};

// const mapDispatchToProps = {
//   getUser: () => getUser()
// }

export default connect(
  mapStateToProps,
  null
)(Index);
