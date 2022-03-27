import React from 'react';
import './Cart.css'

const Cart = (props) => {
    console.log(props)
    const { name, img, price } = props.item
    return (
        <div className='cart'>
            <h3>{name}</h3>
            <div className='flexible-info'>
                <img src={img} alt="" />
                <p>Price: ${price}</p>
            </div>
        </div>
    );
};

export default Cart;