import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {

    const { name, img, seller, price, ratings, } = props.product;

    return (
        <div className='product'>
            <img src={img} alt="product_img" />

            <p className='product_name'>{name}</p>
            <div className='product_info'>
                <p>Price:${price}</p>
                <p>Manufacture: {seller}</p>
                <p>Rating:{ratings} stars</p>
            </div>
            <button onClick={() => props.handleToAddCart(props.product)} className='btn_cart'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;