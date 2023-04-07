import React from 'react';
import './Shirt.css'

const Shirt = ({tShirt, handleAddToCart}) => {
    const {_id, name, picture, price, gender} = tShirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <h5>Price ${price}</h5>
            <button onClick={() => handleAddToCart (tShirt)}>Buy Now</button>
        </div>
    );
};

export default Shirt;