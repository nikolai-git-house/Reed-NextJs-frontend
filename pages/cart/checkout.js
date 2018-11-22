import React, {Component} from 'react';

import {default as CartIndex} from '../../components/Cart'
import CardForm from '../../components/Cart/Checkout/cardForm'
import CardManagement from '../../components/Cart/Checkout/cardManagement'
import ShippingForm from '../../components/Cart/Checkout/shippingForm'
import ShippingSelection from '../../components/Cart/Checkout/shippingSelection'

import { connect } from 'react-redux'

import { removeItemFromCart, updateItemQuantity, createOrder } from '../../actions/cartActions'
import { deleteShipping } from '../../actions/paymentActions';
import Loader from '../../components/Layout/loader'
import Router from 'next/router'

const mapStateToProps = (state) => {
  return {
    cart: state.cart.addedItems,
    beforeTax: state.cart.beforeTax,
    tax: state.cart.tax,
    loading: state.auth.paymentProfiles.loading,
    error: state.cart.error,
    accounts: state.auth.accounts,
    paymentProfiles: state.auth.paymentProfiles
  }
}

const mapDispatchToProps = {
  removeItemFromCart: (id) => removeItemFromCart(id),
  updateItemQuantity: (quanity, id) => updateItemQuantity(quanity, id),
  createOrder: (data) => createOrder(data),
  deleteShipping: (a,b,c) => deleteShipping(a,b,c)
}


export default connect(mapStateToProps,mapDispatchToProps)(class Checkout extends Component {
  
  state = {
    error: null,
    success: null,
    openCardForm: false,
    openShippingForm: false,
    accountIndex: '0',
    initialized: false,
    submitting: false,
    customerAddressId: '',
    regularAccountType: true
  };

  static getDerivedStateFromProps(props, state){
    if(state.initialized) return null;
    if(props.loading) return null;
    
    const openCardForm = !(props.paymentProfiles && props.paymentProfiles.length);
    const shipToList = props.paymentProfiles && props.paymentProfiles[state.accountIndex*1].shipToList;
    const openShippingForm = !(shipToList && shipToList.length);
    const customerAddressId = openShippingForm ? '' : shipToList[0].customerAddressId;

    return {
      openCardForm,
      openShippingForm,
      customerAddressId,
      initialized: true
    }
  }

  update = (e) => {
    if(e.target.name === 'accountIndex'){
      this.setShippingForm(false)
      this.setCardForm(false)
      this.setState({
        [e.target.name]: e.target.value,
        initialized: false
      })
    }
    else this.setState({
      [e.target.name]: e.target.value
    })
  }

  setCardForm = ( bool ) => {
    this.setState({ 
      openCardForm: !!bool,
      cardNumber: '', 
      cardAddress: '', 
      cardZip: '', 
      cardExpiry: '', 
      cardCvc: ''
    })
  }

  setShippingForm = ( bool ) => {
    this.setState({ 
      openShippingForm: !!bool,
      shipFirstName: '',
      shipLastName: '',
      shipAddress: '',
      shipCity: '',
      shipProvinceState: '',
      shipPostalZip: '',
      shipCountry: ''
    })
  }

  validateCard = () => {
    const map = {
      cardNumber: 'Card Number', 
      cardAddress: 'Card Address', 
      cardZip: 'Card Zip', 
      cardExpiry: 'Card Expiry', 
      cardCvc: 'CVC'
    }

    return Object.keys(map).map(v => this.state[v] ? null : map[v]).filter(v => v);
  }

  validateShipping = () => {
    const map = {
      shipFirstName: 'First Name', 
      shipLastName: 'Last Name', 
      shipAddress: 'Address', 
      shipCity: 'City', 
      shipProvinceState: 'Province / State', 
      shipPostalZip: 'Postal / Zip', 
      shipCountry: 'Country',
    }

    return Object.keys(map).map(v => this.state[v] ? null : map[v]).filter(v => v);
  }

  createOrder = () => {
    if(this.props.loading) return;
    if(this.state.submitting) return;

    const cardValidation = this.validateCard();
    const shippingValidation = this.validateShipping();
    let errors = [];

    if(cardValidation.length && this.state.openCardForm) errors = [...cardValidation];
    if(shippingValidation.length && this.state.openShippingForm) errors = [...errors,...shippingValidation];
    if(errors.length) return this.setState({
      error: `These values should not be empty: ${errors.join(', ')}`
    });

    this.setState({ submitting: true, error: null });

    const { 
      error,
      success,
      openCardForm,
      openShippingForm,
      accountIndex,
      initialized,
      submitting, 
      regularAccountType,
      ...data 
    } = this.state;

    this.props.createOrder({ 
      account: { 
        ...this.props.accounts[accountIndex], 
        type: regularAccountType ? 'regular' : 'distributor' 
      },
      paymentProfile: this.props.paymentProfiles[accountIndex],
      ...data 
    })
    .then(v => {
      this.setState({ success: true, submitting: false });
      setTimeout(() => Router.push('/'), 1000);
    })
    .catch(e => {
      console.error(e);
      this.setState({ 
        error: (e.response && e.response.data && e.response.data.message) || e.toString(),
        submitting: false
      });  
    })
  }

  deleteShipping = ( customerAddressId ) => {
    const { accountIndex } = this.state;
    const account = this.props.accounts[accountIndex];
    const paymentProfile = this.props.paymentProfiles[accountIndex];

    // prevent deleting all address
    if(paymentProfile.shipToList.length < 2) return;

    // set new one if current active is being deleted
    if(customerAddressId === this.state.customerAddressId){
      this.setState({
        customerAddressId: paymentProfile.shipToList.find(v => v.customerAddressId !== customerAddressId).customerAddressId
      })
    }

    this.props.deleteShipping(customerAddressId, account, paymentProfile)
  }

  changeAccountType = ( bool ) => {
    this.setState({
      regularAccountType: bool,
      openShippingForm: !bool,
      openCardForm: false
    })
  }

  render() {

    if (this.props.loading) return <Loader/>;
    if(!this.props.accounts || !this.props.accounts.length) return <section className="checkout container">
      <p>Accounts not exists. You should have an account to be able to purchase.</p>
    </section>;

    const { 
      error, success, accountIndex, 
      openShippingForm, openCardForm, 
      customerAddressId, submitting,
      regularAccountType 
    } = this.state;
    const paymentProfile = this.props.paymentProfiles[accountIndex];
    const account = this.props.accounts[accountIndex];
    const {shipToList} = paymentProfile;

    return (
      <section className="checkout container">
        
        {/* to be updated */}
        <div>
          <button onClick={() => this.changeAccountType(!regularAccountType)} class="btn-small">acount type: {regularAccountType?'regular':'distributor'}</button>
        </div>
        {/* ------------- */}

        <div className="row">
          <div className="column--8">
            
            { this.props.accounts.length > 1 ? <form>
              <h3>Payment Account</h3>
              <p>Select an account to charge the purchase</p>
              <select name="accountIndex" onChange={this.updateAccount} value={this.state.accountIndex}>
                { this.props.accounts.map((v,i) => <option key={i} value={i}>{v.name}</option>) }
              </select>
            </form> : null }

            { regularAccountType ? (
            <div className="row">

              <div className="column--6">
                { openShippingForm ? <ShippingForm 
                  paymentProfile={paymentProfile}
                  setShippingForm={this.setShippingForm}
                  account={account}
                  onUpdate={this.update}
                /> : <ShippingSelection 
                  paymentProfile={paymentProfile}
                  shipToList={shipToList}
                  setShippingForm={this.setShippingForm}
                  onUpdate={this.update}
                  customerAddressId={customerAddressId}
                  onDeleteShipping={this.deleteShipping}
                /> }
              </div>

              <div className="column--6">
                { openCardForm ? <CardForm
                  paymentProfile={paymentProfile}
                  setCardForm={this.setCardForm}
                  account={account}
                  onUpdate={this.update}
                /> : <CardManagement 
                  paymentProfile={paymentProfile}
                  setCardForm={this.setCardForm}
                /> }
              </div>
            </div> ) : (

            <div className="row">
              <ShippingForm 
                paymentProfile={paymentProfile}
                setShippingForm={this.setShippingForm}
                account={account}
                onUpdate={this.update}
                distributor={!regularAccountType}
              />
            </div>

            ) }

          </div>
          <div className="column--4">
            <h3>Order Details</h3>
            <CartIndex 
              cartItems={this.props.cart} 
              removeItemFromCart={this.props.removeItemFromCart}
              updateItemQuantity={this.props.updateItemQuantity}
              beforeTax={this.props.beforeTax}
              tax={this.props.tax}
              checkout={true}
            />
            <button onClick={this.createOrder}>{submitting ? 'Submitting...' : 'Purchase'}</button>
            { error && <p style={{color: 'red'}}>{error}</p> }
            { success && <p style={{color: 'green'}}>Purchase success!!</p> }
            { this.props.error && <p style={{color:'red'}}>{this.props.error.toString()}</p> }
          </div>
        </div>
      </section>
    )
  }
  
})