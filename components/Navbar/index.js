import React, { Component } from "react";
import { NavWrapper, Left, Right, Menu } from "./style";

import hamburgerIcon from "../../static/hamburger.svg";

import ActiveLink from "./ActiveLink";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropDown: false
    };
  }

  render() {
    return (
      <NavWrapper dark={this.props.mode === "dark" ? true : false}>
        <Left>
          <img
            onClick={() => {
              this.setState({
                showDropDown: this.state.showDropDown === true ? false : true
              });
            }}
            src={hamburgerIcon}
            style={{
              marginTop: 20,
              marginBottom: 20
            }}
          />
          <Menu showMenu={this.state.showDropDown}>
            <li>
              <ActiveLink href="/products">Products</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/howtobuy">How To Buy</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/contact">Contact</ActiveLink>
            </li>

            {this.props.user && this.props.user.sid ? (
              <div>
                <li
                  style={{
                    display: this.state.showDropDown ? "none" : "inline-block"
                  }}
                >
                  <span>|</span>
                </li>
                <li>
                  <ActiveLink href="/resources">Resources</ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/shop">Store</ActiveLink>
                </li>
                <li>
                  <button className="dashboard_menu">Dashboard</button>
                </li>
              </div>
            ) : null}
          </Menu>
        </Left>
        <Right>
          <ul>
            {this.props.user && this.props.user.sid ? (
              <li>
                <button className="dashboard_out">Dashboard</button>
              </li>
            ) : (
              <li>Smarter with water.</li>
            )}
          </ul>
        </Right>
      </NavWrapper>
    );
  }
}

export default Nav;
