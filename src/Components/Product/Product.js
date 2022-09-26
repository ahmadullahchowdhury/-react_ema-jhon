import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    
    return (
        <div className='products-container'>
            <img src={props.product.img} alt="" />
                <p><strong>{props.product.name}</strong></p>
                <button onClick={() => props.handleClicked(props.product)}>
                <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon> 
                <p>Add to cart</p>
                </button>
        </div>
    );
};

export default Product;