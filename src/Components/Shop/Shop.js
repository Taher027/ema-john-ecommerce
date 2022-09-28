import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);


    const handleToAddCart = (product) => {
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }


    return (
        <div className='shop_container'>
            <div className="product_container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleToAddCart={handleToAddCart}
                    ></Product>)
                }
            </div>
            <div className="cart_container">
                <h4>Order Summary</h4>
                <p>Selected Items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;