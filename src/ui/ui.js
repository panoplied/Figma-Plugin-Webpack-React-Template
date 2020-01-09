import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

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