import React, { Component } from "react";

import Nav from "../../components/Navbar";

import Slider from "../../components/Slider";

import valveImage from "../../static/reedvalve.png";
import meterImage from "../../static/reedmeter.png";
import ropeImage from "../../static/reedrope.png";

import deviceImage from "../../static/devices.png";
import plumbingImage from "../../static/plumbing.png";
import sensorsImage from "../../static/sensors.png";
import accessoriesImage from "../../static/accessories.png";
import softwareImage from "../../static/software.png";

import ProductList from "../../components/Products/list";

import { connect } from "react-redux";
import { getShopItems } from "../../actions/shopActions";

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser,
    hardware: state.shop.items.filter(item => item.type === "hardware"),
    plumbing: state.shop.items.filter(item => item.type === "plumbing"),
    sensors: state.shop.items.filter(item => item.type === "sensors"),
    accessories: state.shop.items.filter(item => item.type === "accessories"),
    software: state.shop.items.filter(item => item.type === "software")
  };
};

export default connect(
  mapStateToProps,
  null
)(
  class Products extends Component {
    static async getInitialProps({ store, query }) {
      await store.dispatch(getShopItems());
      return query;
    }

    labels = ["hardware", "plumbing", "sensors", "accessories", "software"];

    render() {
      return (
        <section>
          <div className="__container">
            <Nav user={this.props.currentUser} mode="dark" />
            <Slider
              defaultIndex={Math.max(
                this.labels.indexOf(this.props.cat || ""),
                0
              )}
              tabs={[
                {
                  label: "Hardware",
                  img: deviceImage,
                  component: <ProductList products={this.props.hardware} />
                },
                {
                  label: "Plumbing",
                  img: plumbingImage,
                  component: <ProductList products={this.props.plumbing} />
                },
                {
                  label: "Sensors",
                  img: sensorsImage,
                  component: <ProductList products={this.props.sensors} />
                },
                {
                  label: "Accessories",
                  img: accessoriesImage,
                  component: <ProductList products={this.props.accessories} />
                },
                {
                  label: "Software",
                  img: softwareImage,
                  component: <ProductList products={this.props.software} />
                }
              ]}
            />
          </div>
        </section>
      );
    }
  }
);
