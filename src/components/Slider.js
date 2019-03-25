import React from "react";
import Nav from "./Nav";

export default class Slider extends React.Component {
    render() {
        return (
            <div>
                {/* <Nav /> */}
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="img-responsive" src="./images/models/hero1.jpg" alt="Model S" />
                            <div className="carousel-caption d-none d-md-block">
                                <h3>Model S</h3>
                                <button className="btn btn-light rounded-pill py-3 px-5 fonweight mt-4" type="submit" name="action">
                                    Order Now
                        </button>
                                <p className="" style={{ color: 'white', fontSize:20 }}>
                                    If you haven't test driven the car, you can return it for a full refund within 7 days or 1,000 miles, whichever comes first.
                        </p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="img-responsive" src="./images/model3/cq5dam.tinypng.1440.auto.jpg" alt="Model 3" />
                            <div className="carousel-caption d-none d-md-block">
                                <h3>Model 3</h3>
                                <button className="btn btn-light rounded-pill py-3 px-5 fonweight mt-4" type="submit" name="action">
                                    Order Now
                        </button>
                                <p className="" style={{ color: 'white', fontSize:20 }}>
                                    If you haven't test driven the car, you can return it for a full refund within 7 days or 1,000 miles, whichever comes first.
                        </p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="img-responsive" src="./images/modelx/hero3.jpg" alt="Model x" />
                            <div className="carousel-caption d-none d-md-block">
                                <h3>Model X</h3>
                                <button className="btn btn-light rounded-pill py-3 px-5 fonweight mt-4" type="submit" name="action">
                                    Order Now
                        </button>
                                <p className="" style={{ color: 'white', fontSize:20 }}>
                                    If you haven't test driven the car, you can return it for a full refund within 7 days or 1,000 miles, whichever comes first.
                        </p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>


            </div>
        )
    }
}