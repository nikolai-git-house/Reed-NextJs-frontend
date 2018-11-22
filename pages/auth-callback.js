import React, {Component} from 'react';
import { ssoCallback } from '../lib/sso-auth';
import Loader from '../components/Layout/loader'

export default class AuthCallback extends Component {
  constructor(props){
    super(props)
  }

  async componentDidMount(){
    await ssoCallback();
    setTimeout(() => window.location.href = '/', 200)
  }

  render() {
    return <Loader />
  }
  
}
