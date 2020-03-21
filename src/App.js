import React, { Component } from 'react';

class App extends Component {

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
        .then(response => response.json())
        .then(json => {
            console.log(json)
        })
    }

    render() {
        console.log("rendered")
        return (<div>test</div>)
    }
}

export default App;
