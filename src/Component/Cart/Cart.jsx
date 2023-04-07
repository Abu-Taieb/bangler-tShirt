import React from 'react';

const Cart = ({cart, handleDeleteToCart}) => {
    return (
        <div>
            <h2>Order Summery: {cart.length} </h2>
            {
                cart.map(tShirt => <p
                key = {tShirt._id}
                >
                    {tShirt.name}
                    <button onClick={() => handleDeleteToCart (tShirt._id)}>X</button>
                </p> )
            }
        </div>
    );
};

export default Cart;