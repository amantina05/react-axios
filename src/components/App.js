import React, { Component } from 'react';
import './App.css';

import Header from './Header/Header';
import List from './List/List';
import Workspace from './Workspace/Workspace';

import {
  getCustomerList,
  createCustomer,
  postCustomer,
  getCustomer,
} from '../customers';

class App extends Component {
  constructor() {
    super();
    this.state = {
      customerList: [],
      initialLoad: true,
      creating: false,
      currentCustomer: null,
    };
    this.startNewCustomer = this.startNewCustomer.bind(this);
    // this.postCustomer = this.createCustomer.bind(this);
    // this.selectCustomer = this.selectCustomer.bind(this);
  }

  componentDidMount() {
    getCustomerList().then(list => {
      this.setState({ customerList: list });
    });
  }

  startNewCustomer() {
    this.setState({
      creating: true,
      initialLoad: false,
      currentCustomer: null,
    });
  }

  // postCustomer(customer) {
  //   createCustomer(customer).then(response => {
  //     getCustomerList().then(list => {
  //       this.setState({
  //         initialLoad: true,
  //         creating: false,
  //         customerList: list,
  //       });
  //     });
  //   });
  // }

  render() {
    return (
      <div>
        <Header />
        <div className="App__container">
          {this.state.customerList ? (
            <List customerList={this.state.customerList || []} />
          ) : null}
          <Workspace
            initialLoad={this.state.initialLoad}
            createCustomer={this.createCustomer}
            currentCustomer={this.state.currentCustomer}
            creating={this.state.creating}
          />

          {/* passing startnewCustomer down to the list components through props */}
          <List
            customerList={this.state.customerList || []}
            startNewCustomer={this.startNewCustomer}
          />
        </div>
      </div>
    );
  }
}

export default App;
