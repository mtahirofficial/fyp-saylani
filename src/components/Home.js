import React, { Component } from 'react';
import Nav from "./Nav"
import Header from './Header';
import DiscoverTesla from './DisconverTesla';
import PowerEveryThing from './PowerEveryThing';


class Home extends Component {
    render() {
        return (
            <div>
                <Nav />
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


                {/* ----------------------------- */}
                <div className="setDivVideo">
                    <div style={{ position: 'absolute', top: 150, left: '40%', zIndex: 1000, textAlign: 'center' }}>
                        <h2>Discover Tesla</h2>
                        <button className=" btn btn-light rounded-pill py-3 px-5 fonweight mt-4 mr-3"
                            // style={{ position: 'relative', left: 0, top: 20 }}
                            type="submit" name="action">
                            Order Now
                    </button>
                        <button className="btn btn-outline-light rounded-pill py-3 px-5 fonweight mt-4"
                            // style={{ position: 'relative', left: 0, top: 20 }}
                            type="submit" name="action">
                            Order Now
                    </button>
                        <br />
                    </div>
                    <div style={{ position: 'absolute', bottom: '-130px', left: '50%', zIndex: 1000, textAlign: 'center' }}>
                        <span className="dropdown-toggle set-toggler"></span>
                    </div>
                    <video className="video-resp" src='./video/experience-hero-desktop.mp4' autoPlay >
                    </video>

                </div>
                {/* ----------------------------- */}
                
            </div>
        );
    }
}

export default Home;
