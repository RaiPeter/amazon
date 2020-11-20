import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"
                src="https://i.pinimg.com/originals/9a/13/dc/9a13dc79ca4368d6c87acb2e52cadf9d.jpg" 
                alt=""/>

            <div className="home__row">
                <Product
                id="12423534"
                 title="Lenovo Flex 5 14inch 2-in-1 Laptop, 14.0inch FHD (1920 x 1080) Touch Display, AMD Ryzen 5 4500U Processor, 16GB DDR4, 256GB SSD, AMD Radeon Graphics, Digital Pen Included, Win 10, 81X20005US, Graphite Grey"
                 price={68.345}
                 image="https://images-na.ssl-images-amazon.com/images/I/81AbJXWCxXL._AC_SL1500_.jpg"
                 rating={5} />
                <Product
                id="5873465354"
                 title="Lenovo IdeaPad 3 14inch Laptop, 14.0inch FHD 1920 x 1080 Display, AMD Ryzen 5 3500U Processor, 8GB DDR4 RAM, 256GB SSD, AMD Radeon Vega 8 Graphics, Narrow Bezel, Windows 10, 81W0003QUS, Abyss Blue"
                 price={216754}
                 image="https://images-na.ssl-images-amazon.com/images/I/71dqjxW8g5L._AC_SX679_.jpg"
                 rating={3} />
            </div>
            <div className="home__row">
            <Product 
            id="1452353434"
                title="Logitech C920x Pro HD Webcam"
                price={45.45}
                image="https://images-na.ssl-images-amazon.com/images/I/71iNwni9TsL._AC_SL1500_.jpg"
                rating={1}  
            />
            <Product
            id="256533656"
             title="
             SAMSUNG Galaxy Tab A- 10.1inch 64GB, Wifi Tablet- SM-T510NZDFXAR Black"
             price={56472.56}
             image="https://images-na.ssl-images-amazon.com/images/I/61ndwk9f8DL._AC_SL1500_.jpg"
             rating={6} />
            <Product
            id="457563"
             title="Acer Nitro 5 Gaming Laptop, 9th Gen Intel Core i5-9300H, NVIDIA GeForce GTX 1650, 15.6inch Full HD IPS Display, 8GB DDR4, 256GB NVMe SSD, Wi-Fi 6, Backlit..."
             price={435.23}
             image="https://images-na.ssl-images-amazon.com/images/I/71s1LRpaprL._AC_SL1500_.jpg"
             rating={2} />                
            </div>
            <div className="home__row">                
                <Product
                id="346532236"
                 title="LG 34WN80C-B 34 inch 21:9 Curved UltraWide WQHD IPS Monitor with USB Type-C Connectivity sRGB 99% Color Gamut and HDR10 Compatibility, Black (2019)"
                 price={657.35}
                 image="https://images-na.ssl-images-amazon.com/images/I/81WBbFOEHwL._AC_SL1500_.jpg"
                 rating={2} />
            </div>
            </div>
        </div>
    )
}

export default Home
