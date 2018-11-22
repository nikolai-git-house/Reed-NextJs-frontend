import React, { Component } from "react";

import Nav from "../../components/Navbar";

import SliderLink from "../../components/SliderLink";
import ProductDetail from "../../components/Products/detail";
import Recommendation from "../../components/Recommendation";

import valveImage from "../../static/reedvalve.png";
import meterImage from "../../static/reedmeter.png";
import ropeImage from "../../static/reedrope.png";

import deviceImage from "../../static/devices.png";
import plumbingImage from "../../static/plumbing.png";
import sensorsImage from "../../static/sensors.png";
import accessoriesImage from "../../static/accessories.png";
import softwareImage from "../../static/software.png";

import { connect } from "react-redux";
import { getProductBySlug } from "../../actions/productActions";
import { getShopItems } from "../../actions/shopActions";

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser,
    product: state.product
  };
};

export default connect(
  mapStateToProps,
  null
)(
  class Products extends Component {
    static async getInitialProps({ store, query }) {
      await store.dispatch(getProductBySlug(query.slug));
      if (!store.getState().shop.items.length)
        await store.dispatch(getShopItems());
    }

    labels = ["hardware", "plumbing", "accessories"];

    render() {
      return (
        <section>
          <div className="__container">
            <Nav user={this.props.currentUser} mode="dark" />

            <SliderLink
              defaultIndex={Math.max(
                this.labels.indexOf(this.props.product.type || ""),
                0
              )}
              tabs={[
                {
                  label: "Hardware",
                  img: deviceImage,
                  href: "/products?cat=hardware"
                },
                {
                  label: "Plumbing",
                  img: plumbingImage,
                  href: "/products?cat=plumbing"
                },
                {
                  label: "Sensors",
                  img: sensorsImage,
                  href: "/products?cat=sensors"
                },
                {
                  label: "Accessories",
                  img: accessoriesImage,
                  href: "/products?cat=accessories"
                },
                {
                  label: "Software",
                  img: softwareImage,
                  href: "/products?cat=software"
                }
              ]}
            />
            <ProductDetail product={this.props.product} />
            <Recommendation exclude={this.props.product._id} />
          </div>
        </section>
      );
    }
  }
);
