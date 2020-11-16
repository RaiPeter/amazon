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
                 title="The lean setup"
                 price={68.345}
                 image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
                 rating={5} />
                <Product
                id="5873465354"
                 title="Shoes"
                 price={216754}
                 image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
                 rating={3} />
            </div>
            <div className="home__row">
            <Product 
            id="1452353434"
                title="Clothes"
                price={45.45}
                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
                rating={1}  
            />
            <Product
            id="256533656"
             title="Sunglasses"
             price={56472.56}
             image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
             rating={6} />
            <Product
            id="457563"
             title="Accessories"
             price={435.23}
             image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
             rating={2} />                
            </div>
            <div className="home__row">                
                <Product
                id="346532236"
                 title="Jackets"
                 price={657.35}
                 image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
                 rating={2} />
            </div>
            </div>
        </div>
    )
}

export default Home
