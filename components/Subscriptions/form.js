import React, {Component} from 'react'

class Form extends Component {
  
  state = {
    cardNumber: '',
    cardAddress: '',
    cardZip: '',
    cardExpiry: '',
    cardCvc: '',
    error: '',
    formOpen: false,
    changingCard: false,
    subscribing: false
  }

  static getDerivedStateFromProps(props, state){
    if(state.formOpen) return null;
    if(!props.paymentProfiles) return { formOpen: true };
    if(!props.paymentProfiles.length) return { formOpen: true };
    return null;
  }

  update = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  setForm = ( state ) => {
    this.setState({
      formOpen: !!state,
      cardNumber: '',
      cardAddress: '',
      cardZip: '',
      cardExpiry: '',
      cardCvc: '',
      error: ''
    })
  }

  validateData = (data) => {
    const map = {
      cardNumber: 'Card Number',
      cardAddress: 'Address',
      cardZip: 'ZIP',
      cardExpiry: 'Expiry',
      cardCvc: 'CVC'
    };

    return Object.keys(data).map(v => !!data[v] ? null : map[v]).filter(v => v);
  }

  onSubscribe = () => {
    const { paymentProfiles } = this.props;
    const { changingCard, subscribing, error, formOpen, ...state } = this.state;
    if(subscribing) return;

    const validation = this.validateData(state);

    if(
      (validation.length && (!paymentProfiles || !paymentProfiles.length)) ||
      paymentProfiles && paymentProfiles.length && formOpen && validation.length
    ) return this.setState({ 
        error: `These fields cannot be empty: ${validation.join(', ')}`
      });

    this.setState({ subscribing: true })

    this.props.onSubscribe( state )
    .then(() => this.setForm( false ))
    .catch(e => {
      this.setState({ 
        error: (e.response && e.response.data && e.response.data.message) 
                || 'Error in updating card, please try again later' 
      });
    })
    .finally(() => this.setState({ subscribing: false }))

  }  

  submitChangeCard = () => {
    const { changingCard, subscribing, error, formOpen, ...state } = this.state
    if(changingCard) return;

    const validation = this.validateData(state);

    if(validation.length)
      return this.setState({ 
        error: `These fields cannot be empty: ${validation.join(', ')}`
      });

    this.setState({ changingCard: true })

    this.props.onChangeCard( state )
    .then(() => this.setForm( false ))
    .catch(e => {
      this.setState({ 
        error: (e.response && e.response.data && e.response.data.message) 
                || 'Error in updating card, please try again later' 
      });
    })
    .finally(() => this.setState({ changingCard: false }))
  }

  cardForm = () => {
    const { isActive, paymentProfiles, owner } = this.props;
    const { error, subscribing, changingCard } = this.state;
    return <div>
      <h3>{paymentProfiles ? 'Change' : 'Add'} card for {`${owner.name} (${owner.email})`}</h3>
      <div className="row">
        <label>Card Number</label>
        <input type="number" name="cardNumber" onChange={this.update} value={this.state.cardnumber} 
          placeholder={'e.g. 4242424242424242'}
        />
      </div>
      <div className="row">
        <label>Address</label>
        <input type="text" name="cardAddress" onChange={this.update} value={this.state.cardaddress} 
          placeholder={'e.g. 27th Sessame st.'}
        />
      </div>
      <div className="row">
        <div className="column">
          <label>Zip</label>
          <input type="number" name="cardZip" onChange={this.update} value={this.state.cardzip} 
            placeholder={'e.g. 12345'}
          />
        </div>
        <div className="column">
          <label>Expiry</label>
          <input type="number" name="cardExpiry" onChange={this.update} value={this.state.cardexpiry} 
            placeholder={'mmyy | e.g. 2510'}
          />
        </div>
        <div className="column">
          <label>CVC</label>
          <input type="number" name="cardCvc" onChange={this.update} value={this.state.cardcvc} 
            placeholder={'e.g. 654'}
          />
        </div>
      </div>
        { paymentProfiles && paymentProfiles.length ? <div>
          <button className="btn-danger" onClick={() => this.setForm(false)}>Cancel</button> &nbsp;&nbsp; 
          <button className="btn-info" onClick={this.submitChangeCard}>{changingCard ? 'Submiting...' : 'Submit'}</button>
          { !isActive ? <span> &nbsp; <button onClick={this.onSubscribe}>{subscribing ? 'Subscribing...' : 'Submit & Subscribe'}</button></span> : null }
        </div> : null }
        { !paymentProfiles || !paymentProfiles.length ? <div>
          <button onClick={this.onSubscribe}>{subscribing ? 'Subscribing...' : 'Submit & Subscribe'}</button>
        </div> : null }
        { error ? <p style={{color:'red'}}>{error}</p> : null }
    </div>
  }

  cardManagement = () => {
    const { paymentProfiles, isActive } = this.props;
    const { error, subscribing, changingCard } = this.state;
    return <div>
      <p>Card:&nbsp;
        {paymentProfiles[0].payment.creditCard.cardType}&nbsp; 
        {paymentProfiles[0].payment.creditCard.cardNumber}
      </p>
      <button className="btn-info" onClick={() => this.setForm(true)}>Change card</button>
      { !isActive ? <span> &nbsp; <button onClick={this.onSubscribe}>{subscribing ? 'Subscribing...' : 'Subscribe'}</button></span> : null }
      { error ? <p style={{color:'red'}}>{error}</p> : null }
    </div>
  }
  
  render() {

    return this.state.formOpen ? this.cardForm() : this.cardManagement();
  }
}

export default Form