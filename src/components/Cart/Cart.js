import React from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Cart.css'

const Cart = (props) => {
    const { name, img, price } = props.item
    return (
        <div className='cart'>
            <h3>{name}</h3>
            <div className='flexible-info'>
                <img src={img} alt="" />
                <p>Price: ${price}</p>
                <button className='remove-btn'>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </div>
    );
};

export default Cart;