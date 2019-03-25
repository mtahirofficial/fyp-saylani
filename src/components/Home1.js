import React, { Component } from 'react';
import Nav from './Nav';
import Slider from './Slider';
import DiscoverTesla from './DisconverTesla';
import PowerEveryThing from './PowerEveryThing';
import TeslaAccessories from './TeslaAccessories';


class Home1 extends Component {
    
    render() {
        return (
            <div>
                <div className="home text-white">
                    <div className="slide">
                        {/* <Nav /> */}
                        <Slider />
                        
                    </div>
                    <div className="slide two">
                        <DiscoverTesla />


                    </div>
                    <div className="slide three">
                        <PowerEveryThing />
                        
                    </div>
                    <div className="slide four">
                        <TeslaAccessories />
                        
                    </div>

                </div>
            </div>
        );
    }
}

export default Home1;
