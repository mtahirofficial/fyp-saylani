import React from 'react'
import { Link } from "react-router-dom"

class DiscoverTesla extends React.Component {
    render() {
        return (
            <div className="card text-white">
                <video height="100%" width="100%" className="video" src='./video/experience-hero-desktop.mp4' autoPlay >
                </video>
                <div className="card-img-overlay">
                    <h2>Discover Tesla</h2>
                    <Link className=" btn btn-light rounded-pill py-3 px-5 fonweight mt-4 mr-3" to="/drive">
                        Test Drive
                                </Link>
                    <button className="btn btn-outline-light rounded-pill py-3 px-5 fonweight mt-4" type="submit" name="action">
                        Used Inventory
                                </button>

                </div>
            </div>
        )
    }
}

export default DiscoverTesla;