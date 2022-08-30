import React from "react";
import "./Home.css"
import Product from "./Product"

function Home(){
    return(
        <div>
        <div className="home">
        
        <div className="home__container">
        
        <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" alt=""
        className="home__image" />

        <div className="home__row">
            <Product 
            id="12321341"
            title=" Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling
            Office Bag . Water Repellent Fabric for Men and Women (Blue). "
            price={11.96}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
            />
            
            <Product
            id="49538094"
            title=" IFB 30 L Convection Microwave Oven (30BRC2, Black, With Starter kit)."
            price={239.0}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/81D8pNFmWzL._SL1500_.jpg"
             />
        </div>
        <div className="home__row">
            <Product
            id="4903850"
            title="All the Light We Cannot See: The Breathtaking Worldwide Best Seller Paperback "
            price={199.99}
            rating={3}
            image="https://images-eu.ssl-images-amazon.com/images/I/514kNkerQ0L._SY264_BO1,204,203,200_QL40.FMwebp_.jpg"
            />
            <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart Speaker with Alexa,Charcoal fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
             />
            <Product
            id="32544345"
            title="New Apple iPad Pro(12.9-inch,Wi-Fi,128GB) - Silver(4th Generation)"
            price={598.99}
            rating={5}
            image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-ipad-pro-12-wifi-silver-2020?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1626721066000" 
             />

        </div>
        <div className="home__row">
            <Product
            id="23435680"
            title="Samsung LC49RG90SSUXEN 49' curved LED Gaming Monitor - Super Ultra Wide Dual 
            WQHD 5120x1440 "
            price={1094.98}
            rating={4}
            image="https://images-eu.ssl-images-amazon.com/images/I/81rus0UFhsL.__AC_SY300_SX300_QL70_ML2_.jpg"
             />
        </div>


        </div>
        </div>
        </div>
    )
}

export default Home;
