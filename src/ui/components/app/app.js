import React, { Component } from 'react';

import Logo from '../../images/logo.png';
import './app.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            apiVersion: ""
        }
    }
    render() {
        return(
            <div>
                <h2>UI Template</h2>
                <img src={Logo} id="logo"/>
                <p>API Version: <span id="apiVersion"></span></p>
            </div>
        );
    }
}

export default App;