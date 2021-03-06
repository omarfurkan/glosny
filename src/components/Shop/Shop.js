import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleCart = (product) => {
        // console.log(product)
        const newCart = [...cart, product];
        setCart(newCart)

    }



    if (cart.length >= 4) {
        alert('Can not select more then 4 items')
    }



    return (
        <>
            <div className='shop-container'>
                <div className='products-container'>
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                            handleCart={handleCart}
                        ></Product>)
                    }
                </div>
                <div className='cart-container'>
                    <h2>Selected Items</h2>

                    {
                        cart.map(item => <Cart
                            key={item.id}
                            item={item}
                        >
                        </Cart>)
                    }
                    <div className='choose-btn'>
                        <button>Choose 1 for Me</button>
                        <button>Choose Again</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Shop;