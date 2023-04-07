import React from 'react';
import './Cart.css'

const Cart = ({cart, handleDeleteToCart}) => {

    let message;
    if(cart.length === 0){
        message = <p>Please add some products</p>
    }else{
        message = <p>Thanks for you buy this products</p>
    }

    return (
        <div>
            <h2 className={cart.length === 1 ? 'red' : 'blue'}>Order Summery: {cart.length} </h2>
            {/* ternary  */}
            {cart.length >= 2
            ? <span className='purple'>more than 2 product</span>
            : <span className='yellow'>less than 2 product</span> }

            {/* message  */}
            {message}
            {
                cart.map(tShirt => <p
                key = {tShirt._id}
                >
                    {tShirt.name}
                    <button onClick={() => handleDeleteToCart (tShirt._id)}>X</button>
                </p> )
            }
            {/* logical &&  */}
            {
                cart.length === 2 && <p>Only two item added !!!</p>
            }
            {/* logical ||  */}
            {
                cart.length === 3 || <p>less or more than 3 added</p>
            }
        </div>
    );
};

export default Cart;

