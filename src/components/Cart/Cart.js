import React from 'react';


const Cart = (props) => {
    const cart= props.cart;
    const total = cart.reduce((total,singleProduct)=>total + singleProduct.price * singleProduct.quantity,0);
    debugger

    let shipping =0;
    if (total>35) {
     shipping = 0;   
    }
    else if(total>15){
        shipping = 4.99;
    }
    else if(total>0){
        shipping = 12.99;
    }

    const tax = total/10;
    const grandTotal= (total + shipping + tax);

    const formatNumber= num =>{
        const precision = num.toFixed(2);
        return Number( precision);
    }
    return (
        <div>
            <h1>Order Summary </h1>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {formatNumber(total)}</p>
            <p>Shopping Cost: {shipping}</p>
            <p>Tax + VAT: {formatNumber(tax)}</p>
            <p>Total Price: {formatNumber(grandTotal)}</p>
           {
           props.children
           }
        </div>
    );
};

export default Cart;