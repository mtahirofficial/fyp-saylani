import React from 'react'
import { Link } from "react-router-dom"

class PowerEveryThing extends React.Component {
    render() {
        return (
            <div className="card text-white">
                <video height="100%" width="100%" className="video" src='./video/power-hero-desktop.mp4' autoPlay >
                </video>
                <div className="card-img-overlay">
                    <h2>Power Everything</h2>
                    <h5>Solar and Powerwall</h5>
                    <Link className=" btn btn-light rounded-pill py-3 px-5 fonweight mt-4 mr-3" to="">
                        Request a Quote
                                </Link>
                    <button className="btn btn-outline-light rounded-pill py-3 px-5 fonweight mt-4" type="submit" name="action">
                        Learn More
                                </button>

                </div>
            </div>
        )
    }
}

export default PowerEveryThing;