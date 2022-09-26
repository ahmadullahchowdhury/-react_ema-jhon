import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products , setProduct]  = useState([])
    const [cartProducts , setCartProduct]  = useState([])
    useEffect(() =>{
        fetch('products.json').then(res => res.json()).then(data => setProduct(data))
    },[])
    const handleClicked = (lol) =>{
        const updatedCartProducts = [...cartProducts , lol ]
        setCartProduct(updatedCartProducts)
        console.log(localStorage.getItem('lol'))
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product product={product}
                        handleClicked = {handleClicked}
                        key={product.id}
                    >
                    </Product>)
                }
            </div>
            <div className=''>
                <h1>Order Summary</h1>
                <p>Product Added:{cartProducts.length} </p>
            </div>
        </div>
    );
};

export default Shop;