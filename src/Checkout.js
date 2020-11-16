import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad"
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_LP_Dash_en_US.jpg" />
           <div>
               <h2 className="checkout__title">Your shopping basket</h2>
            {/*products*/}
            {/*products*/}
            {/*products*/} 
           </div>
            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
