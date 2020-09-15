import { response } from 'express';
import React, { Component } from 'react';

class Blocks extends Component {
    state = { blocks: [] };


    componentDidMount() {
        fetch('http://localhost:3000/api/blocks')
        .then(response => response.json())
        .then(json => this.setState({ blocks: json }));
    }
}