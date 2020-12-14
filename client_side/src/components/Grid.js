import React, { Component } from 'react'
import Left from './Left'
import Right from './Right'
import './styles/grid.css'

export default class Grid extends Component {
    render() {
        return (
            <div className="GridDisplay">
                <Left></Left>
                <Right></Right>
            </div>
        )
    }
}

