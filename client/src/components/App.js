import React, { Component } from 'react';

class App extends Component {
    state = { walletInfo: {address: 'fooxv6', balance: 9999 } };

  render() {
      const {address, balance } = this.state.walletInfo
      return (
          <div>
              Welcome to the BlockChain Folks...
          </div>
      );
  }
}

export default App;