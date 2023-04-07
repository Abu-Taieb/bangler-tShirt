import React from 'react';
import Special from '../Special/Special';
import Friend from '../Friend/Friend';

const Myself = ({ring}) => {
    return (
        <div>
            <h2>Myself</h2>
            <Special ring={ring}></Special>
            <Friend></Friend>
        </div>
    );
};

export default Myself;