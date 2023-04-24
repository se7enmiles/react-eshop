import React from "react";
import Product from './Product';
import './Home.css';

function Home(){
    return (
        <div className="home">
            <div className="home__container">
                <img src="https://www.shutterstock.com/image-vector/tiny-people-customers-bags-shopping-260nw-1331333954.jpg" alt="" className='home__image'/>

                <div className="home__row">
                    <Product
                        id="0001"
                        title="Apple AirPods Pro (2nd Generation) Wireless Earbuds, Up to 2X More Active Noise Cancelling, Adaptive Transparency, Personalized Spatial Audio, MagSafe Charging Case, Bluetooth Headphones for iPhone"
                        price={100.0}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/61f1YfTkTDL._AC_SL1500_.jpg"
                    />
                    <Product
                        id="0002"
                        title="Fire TV Stick with Alexa Voice Remote (includes TV controls), free & live TV without cable or satellite, HD streaming device"
                        price={200.0}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/61v5vPpgDLL._AC_SL1000_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="0003"
                        title="Apple 2021 10.2-inch iPad (Wi-Fi, 64GB) - Space Gray (9th Generation)"
                        price={84.0}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/61NGnpjoRDL._AC_SL1500_.jpg"
                    />
                    <Product
                        id="0004"
                        title="Echo Show 8 (2nd Gen, 2021 release) | HD smart display with Alexa and 13 MP camera | Charcoal"
                        price={100.0}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/61qCVjklDCL._AC_SL1000_.jpg"
                    />
                    <Product
                        id="0005"
                        title="Surge Protector Power Strip - 6 Ft Flat Plug Extension Cord with 8 Widely Outlets and 4 USB Ports(1 USB C), 3 Side Outlet Extender for Home Office, White, ETL Listed"
                        price={16.0}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/61U-Z4eTs7L._AC_SL1500_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="0006"
                        title="USB Wall Charger, Surge Protector, QINLIANF 5 Outlet Extender with 4 USB Charging Ports (4.8A Total) 3-Sided 1680J Power Strip Multi Plug Outlets Wall Adapter Spaced for Home Travel Office (3U1C)"
                        price={16.0}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/61Hh-YlfJOL._AC_SL1500_.jpg"
                    />
                </div>
            </div>
        </div>
    )
}
export default Home;