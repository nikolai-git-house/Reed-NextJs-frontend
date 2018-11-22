import React, {Component} from 'react';
import Link from 'next/link'
import Router from 'next/router'
import cart from '../../static/cart.svg'
import downarrow from '../../static/downarrow.svg'

import logo from '../../static/logo.svg'

import { OidcCLientId } from '../../config';

class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      dropdown: false
    }

    this.toggleDropdown = this.toggleDropdown.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  toggleDropdown() {
    this.setState({
      dropdown: this.state.dropdown == true ? false : true
    })
  }

  handleLogin(e) {
    e.preventDefault()
    this.props.logIn()
  }
  
  handleLogout(e) {
    e.preventDefault()
    this.props.logOut()
  }

  showAuth = () => {
    return (
  
      <div className="header__menu">
        
        <Link prefetch href="/cart"><a style={{marginRight: '10px'}}><img src={cart} />{this.props.cart.totalItem}</a></Link>
        <span> | </span>
        
          <div className="header__menu__dropdown">
            <img onClick={this.toggleDropdown} src={downarrow} />
            <Link prefetch href="/account"><a>{this.props.currentUser && this.props.currentUser.preferred_username}</a></Link>
          </div>
        
        <div className={this.state.dropdown == true ? `header__menu__dropdown__menu--active` : `header__menu__dropdown__menu`}>
          <a onClick={this.handleLogout} href="#">Logout</a>
        </div>
        
      </div>

    )
  }

  showLoading = () => {
    return (
      <div className="header__menu">
        <Link href="/"><a>...</a></Link>
      </div>
    )
  }

  noAuth = () => {
    return (
      <div className="header__menu">
        <a href={`https://ids.kube-prolucid.ca/register?clientId=${OidcCLientId}`}>Register</a>
        <span>|</span>
        <a onClick={this.handleLogin} href="#">Login</a>
      </div>
    )
  }

  render() {
    return (
      <React.Fragment>
        <div className="header">
          <div className="header__wrapper">
            <div className="header__header">
              <Link href="/"><a><img src={logo} /></a></Link>
            </div>
            {this.props.loading ? this.showLoading() :  
            this.props.currentUser.preferred_username ? this.showAuth() : this.noAuth()}
          </div>
        </div>
      </React.Fragment>
    )
  }
  

}


export default Header
