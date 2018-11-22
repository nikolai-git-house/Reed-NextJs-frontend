import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import { AppWrapper } from "./style";
import React, { Component } from "react";

import { connect } from "react-redux";

import { logIn, getUser, logOut } from "../../actions/authActions";

class Layout extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    process.browser && this.props.getUser();
  }

  render() {
    return (
      <AppWrapper>
        <Header
          loading={this.props.authLoading}
          cart={this.props.cart}
          currentUser={this.props.currentUser}
          logOut={this.props.logOut}
          logIn={this.props.logIn}
        />
        {/* <Breadcrumbs 
        exclude={[
          /^\/$/,
          /^\/auth-callback/,
          /^\/auth-silent-callback/,
          /^\/unauthorized/
        ]}
      /> */}
        <div style={{ flex: 1 }}>{this.props.children}</div>
        <Footer />
      </AppWrapper>
    );
  }
}

const mapDispatchToProps = {
  logIn: () => logIn(),
  getUser: () => getUser(),
  logOut: () => logOut()
};

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser,
    cart: state.cart,
    authLoading: state.auth.loading
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
