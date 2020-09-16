import React, { Component } from 'react';

class App extends Component {
    state = { walletInfo: { address: 'fooxv6', balance: 9999} };

    render() {
        const { address, balance } = this.state.walletInfo;

        return (
            <div>
                <div>
                Welcome to BearFace Crypto Blockchain...
                </div>
                <div>Adrress: {address}</div>
                <div>Balance: {balance}</div>
            </div>
        );
    }
}

export default App;