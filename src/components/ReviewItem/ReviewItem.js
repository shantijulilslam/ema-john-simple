import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const {name ,quantity,key,price} =props.product;
    return (
        <div className="review-item">
            <h1 className="product-name">{name}</h1>
            <p>Quantity: {quantity}</p>
            <p><small> $ {price}</small></p>
            <button onClick={()=>props.removeProduct(key)} className="product-cart-btn">Remove</button>
        </div>
    );
};

export default ReviewItem;