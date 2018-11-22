import React from 'react'
import App, {Container} from 'next/app'
import {Provider} from 'react-redux'
import withRedux from 'next-redux-wrapper'
import {initStore} from '../store'

import { persistStore } from 'redux-persist'
import "../styles/index.scss"

import {default as LayoutRender}from '../components/Layout'

export default withRedux(initStore)(class Layout extends App {

  static async getInitialProps ({ Component, ctx }) {
    return {
      pageProps: (Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
    }
  }

  componentDidMount(){
    if(process.browser) 
      persistStore( this.props.store );
  }

  render() {
    const {Component, pageProps, store, router } = this.props;

    return (
      <Container>
          <Provider store={store}>
            <LayoutRender>
              <Component {...pageProps}/>
            </LayoutRender>
          </Provider>
      </Container>
    )
  }
}) 
