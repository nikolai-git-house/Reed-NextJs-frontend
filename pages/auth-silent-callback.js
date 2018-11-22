import React, {Component} from 'react';
import { ssoSilentCallback } from '../lib/sso-auth';

export default class AuthCallback extends Component {
  constructor(props){
    super(props)
  }

  async componentDidMount(){
    const resp = await ssoSilentCallback();
  }

  render() {
    return <p style={{ padding: '21px' }}>Processing login..</p>
  }
  
}