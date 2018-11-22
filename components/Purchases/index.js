import React, { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import Pagination from 'rc-pagination';

import { getOrders } from '../../actions/purchaseActions';
import Loader from '../Layout/loader';
import PurchaseItem from './item';

import { PurchaseListContainer } from './style';

class Purchases extends Component {

  state = {
    initialized: false,
    selectedAccount: null,
    page: 1,
    pageSize: 5
  }

  setAccount = ( stringIndex ) => {
    this.setState({
      selectedAccount: stringIndex,
      page: 1
    })
  }

  changePage = (page) => {
    this.setState({ page });
  }

  changePageSize = (current, pageSize) => {
    this.setState({ pageSize });
  }

  static getDerivedStateFromProps(props, state){
    
    // get all purchases after accounts have been loaded
    if(state.initialized) return null;
    if(props.accounts.loading) return null;

    props.getOrders();
    return { initialized: true, selectedAccount: '0' };
  }

  getPurchaseList = () => {
    const { purchases, accounts } = this.props;
    const { selectedAccount } = this.state;
    return purchases[ accounts[selectedAccount*1].aid ] || [];
  }

  render(){

    const { purchases, accounts } = this.props;
    if(purchases.loading) return <Loader />;
    if(!accounts.length) return <p><i>No purchases found...</i></p>;
    if(!Object.keys(purchases).length) return <p><i>No purchases found...</i></p>;

    const list = this.getPurchaseList();

    const { page, pageSize } = this.state;
    console.log(list, page, pageSize);
    console.log((page-1) * pageSize);
    console.log(list.slice( (page-1) * pageSize, pageSize ));

    return <PurchaseListContainer>
      <div className="header-footer">
        <Pagination 
          current={page} 
          pageSize={pageSize} 
          onChange={this.changePage}
          onShowSizeChange={this.changePageSize}
          total={list.length} />
      </div>
      <div className="list">
        { list.length ? 
          list.slice( (page-1) * pageSize, ((page-1) * pageSize) + pageSize ).map((v,i) => <PurchaseItem className="purchase-item" key={i} order={v} />) :  
          <p><i>No purchases found...</i></p> }
      </div>
      <div className="header-footer">
        <Pagination 
          current={page} 
          pageSize={pageSize} 
          onChange={this.changePage}
          onShowSizeChange={this.changePageSize}
          total={list.length} />
      </div>
    </PurchaseListContainer>

  }

}

export default connect(state => ({
  accounts: state.auth.accounts,
  purchases: state.purchases
}),{
  getOrders: () => getOrders()
})(Purchases);