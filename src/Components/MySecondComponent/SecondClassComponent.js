import React, { Component } from 'react'

export default class SecondClassComponent extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                {this.props.name.name}
            </div>
        )
    }
}
