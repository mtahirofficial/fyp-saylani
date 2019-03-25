import React from "react";

export default class TeslaAccessories extends React.Component {
    render() {
        return (
            <div className="card text-white">
                <video className="video last" src='./video/accessories-hero-desktop.mp4' autoPlay >
                </video>
                <div className="card-img-overlay">
                    <h2>Tesla Accessories</h2>
                    <button className=" btn btn-light rounded-pill py-3 px-5 fonweight mt-4 mr-3" type="submit" name="action">
                        Shop Now
                                </button>


                </div>
            </div>
        )
    }
}