import React, { Component } from 'react'
import './styles/right.css'
import Scrollable from './Scrollable'
import Search from './Search'
import ResultSummary from './ResultSummary'

export default class Right extends Component {
    render() {
        return (
            <div className="Right">
                <Search></Search>
                <ResultSummary></ResultSummary>
                <Scrollable></Scrollable>
            </div>
        )
    }
}
