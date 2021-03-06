import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = ({ product, handleCart }) => {
    const { name, price, img } = product;
    return (
        <div className='product'>
            <div className='product-img'>
                <img src={img} alt="" />
            </div>
            <div className='product-detail'>
                <div className='product-info'>
                    <h3>{name}</h3>
                    <p>Price: ${price}</p>
                </div>
                <button onClick={() => handleCart(product)} className='btn-cart'>
                    <p className='btn-text'>Add to Cart</p>
                    <FontAwesomeIcon icon={faBagShopping} />
                </button>
            </div>
        </div >
    );
};

export default Product;