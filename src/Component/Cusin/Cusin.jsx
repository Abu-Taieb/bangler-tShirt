import React from 'react';
import Friend from '../Friend/Friend';

const Cusin = ({children, hasFriend, money}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p> <small>{children}</small> </p>
            {hasFriend && <Friend money={money}></Friend>}
        </div>
    );
};

export default Cusin;