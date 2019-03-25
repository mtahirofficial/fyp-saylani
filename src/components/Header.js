import React from 'react'
import Nav from './Nav';

class Header extends React.Component {
    render() {
        return (
            <div>
                
            <div className="backgroundImage" style={{ border: '1px solid transparent', textAlign: 'center' }}>
                <div style={{ marginTop: 134, height: "100%" }}>
                    <h3 className="fonweight">Model3</h3>
                    <button className="btn btn-light rounded-pill py-3 px-5 fonweight mt-4" type="submit" name="action">
                        Order Now
                    </button>
                    <div className="setDotCenter">
                        <ul className="list-group list-group-horizontal setBackground">
                            <li className="list-group-item">
                                {/* <input type="radio" name="slide" /> */}
                                <span className="dot" ></span>
                            </li>
                            <li className="list-group-item">
                                {/* <input type="radio" name="slide" /> */}
                                <span className="dot" ></span>
                            </li>
                            <li className="list-group-item">
                                {/* <input type="radio" name="slide" /> */}
                                <span className="dot" ></span>
                            </li>
                        </ul>
                    </div>
                    <p className="setMarginTop">
                        If you haven't test driven the car, you can return it for a full refund within 7 days or 1,000 miles, whichever comes first.
                    </p>
                    <span className="dropdown-toggle set-toggler"></span>
                </div>
            </div>

            </div>
        )
    }
}

export default Header;