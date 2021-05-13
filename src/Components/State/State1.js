import React, { Component } from 'react'
const state = {
    "name": "Lucky",
    "age": 26
}

export default class State1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "harinath",
            "age": 26
        };
    }


    stateUpdateMEthod = ()=>{
        this.setState({name:"hello"});     // update new values
    }
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h1>{this.state.age} </h1>
                <h1>{state.name}</h1>   
                <button style={{"color":"green"}} onClick={this.stateUpdateMEthod}>test State</button>
                     </div>
        )
    }
}
