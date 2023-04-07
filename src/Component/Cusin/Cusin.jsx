import React from 'react';
import Friend from '../Friend/Friend';

const Cusin = ({children}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p> <small>{children}</small> </p>
            <Friend></Friend>
        </div>
    );
};

export default Cusin;