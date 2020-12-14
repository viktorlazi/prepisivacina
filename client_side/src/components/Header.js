import React, { Component } from 'react'
import './styles/header.css'

export default class Header extends Component {
    render() {
        return (
            <header>
                <h1>Prepisivacina</h1>
                <ul>
                    <li>Ocijenjeni</li>
                    <li>Najnoviji</li>
                    <li>Certificirani</li>
                </ul>
            </header>
        )
    }
}