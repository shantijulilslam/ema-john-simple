import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    const { img, name, seller,price, stock } = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='product-info'>
                <h1 id='product-name'>{name}</h1>
                <br />
                <p>by: {seller}</p>
                <h3>${price}</h3>
                <p>Only {stock} left in stock - Order Soon</p>
                <button onClick={()=>props.handleAddProduct(props.product)} className='product-cart-btn'><FontAwesomeIcon icon={faShoppingCart}/> add to cart</button>

            </div>

        </div>
    );
};

export default Product;