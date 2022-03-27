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
                </div>
            </div>
        </>
    );
};

export default Shop;