import React, { Component } from 'react';
import { Link } from "react-router-dom"
class Footer extends Component {
    render() {
        return (
            <div>
                <div className="navbar navbar-fixed-bottom footerBar">
                    <Link to="#home">Home</Link>
                    <Link to="#news">News</Link>
                    <Link to="#contact">Contact</Link>
                </div>
            </div>
        );
    }
}

export default Footer;
