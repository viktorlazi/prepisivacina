import React, { Component } from 'react'
import './styles/search.css'

export default class Search extends Component {
    render() {
        return (
            <div className="Search">
                <div className="SearchInputs">
                    <input type="text" className="SearchBar" placeholder="ime ustanove + naslov dokumenta" />
                </div>
            </div>
        )
    }
}
