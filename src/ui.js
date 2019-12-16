import React from 'react';
import ReactDOM from 'react-dom';

import './ui.css';

import Logo from './images/logo.png';

class App extends React.Component {
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

ReactDOM.render(<App />, document.getElementById('root'));

// Event handler
onmessage = event => {
    let message = event.data.pluginMessage;
    console.log("I got", message);
    switch(message.type) {
        case "apiVersion":
            document.getElementById('apiVersion').innerHTML = message.content;
            break;
        default:
            console.log("Dindu nuffin");
            break;
    }
};