import React, { Component } from 'react'

class Navbar extends Component {

    static defaultProps = {
        title: "Whoa!!!"
    }
    
    render() {
        return (
            <nav className="padding-y-4">
                <ul className="nav nav--horizontal justify-content-center">
                    <li>
                        <a href="#1">{ this.props.title }</a>
                    </li>
                    <li>
                        <a href="#1">{ this.props.title }</a>
                    </li>
                    <li>
                        <a href="#1">{ this.props.title }</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;