import React, { Component } from 'react';
import { Link } from "react-router-dom"
class Nav extends Component {

    render() {
        return (

            <nav className="navbar navbar-fixed-top navbar-expand-lg navbar-light" style={{ background: 'transparent' }}>
                <Link className="navbar-brand text-gray" to={"/"}><img src={"./images/Tesla.png"} alt="Tesla Title" /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto" style={{ marginLeft: 'auto' }}>
                        <li className="nav-item px-3">
                            <Link className="nav-link text-gray" to="/models">Model S</Link>
                        </li>
                        <li className="nav-item  px-3">
                            <Link className="nav-link text-gray" to="/modelx">Model X</Link>
                        </li>

                        <li className="nav-item  px-3">
                            <Link className="nav-link text-gray" to="/model3">Model 3</Link>
                        </li>
                        <li className="nav-item  px-3">
                            <Link className="nav-link text-gray" to="/roadster">RoadSter</Link>
                        </li>
                        <li className="nav-item  px-3">
                            <Link className="nav-link text-gray" to="/energy"> ENERGY</Link>
                        </li>

                    </ul>

                    <ul className="navbar-nav pt-3">
                        {this.props.userLogged ?
                            // <li>{this.props.userLogged}</li>
                            <div className="btn-group dropleft">
                                <button type="button" className="btn btn-outline-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Profile
                            </button>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="#">{this.props.userLogged.name}</Link>
                                    <Link className="dropdown-item" to="#">{this.props.userLogged.email}</Link>
                                    <Link className="dropdown-item" to="#">Logout</Link>
                                    
                                </div>
                            </div>
                            :
                            <Link to={"/login"}>
                                <li className="nav-link text-gray">SIGN IN</li>
                            </Link>
                        }
                        {/* <Link to={"/models"}>
                            <li className="nav-link text-gray">SHOP</li>
                        </Link> */}

                    </ul>
                </div>
            </nav>
        );
    }
}

export default Nav;
