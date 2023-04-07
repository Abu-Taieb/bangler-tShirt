import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Shirt from "../Shirt/Shirt";
import Cart from "../Cart/Cart";
import "./Home.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const tShirts = useLoaderData();
  const [cart, setCart] = useState([]);

  const handleAddToCart = (tShirt) => {
    const exists = cart.find(ts => ts._id === tShirt._id);
    if (exists) {
      toast("Already Added!");
      
    } else {
      const newCart = [...cart, tShirt];
      setCart(newCart);
    }
  };

  const handleDeleteToCart = (id) => {
    const remaining = cart.filter(ts => ts._id !== id);
    setCart(remaining);
  };

  return (
    <div className="home-container">
      <div className="shirt-container">
        {tShirts.map((tShirt) => (
          <Shirt
            key={tShirt._id}
            tShirt={tShirt}
            handleAddToCart={handleAddToCart}
          ></Shirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleDeleteToCart={handleDeleteToCart}></Cart>
      </div>
      <ToastContainer />;
    </div>
  );
};

export default Home;

