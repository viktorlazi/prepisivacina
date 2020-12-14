import React, { Component } from 'react'
import './styles/right.css'
import Scrollable from './Scrollable'

export default class Right extends Component {
    render() {
        return (
            <div className="Right">
                <Scrollable></Scrollable>
            </div>
        )
    }
}
