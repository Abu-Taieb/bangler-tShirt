import React from 'react';
import Cusin from '../Cusin/Cusin';

const Aunty = ({money}) => {
    return (
        <div>
            <h2>Aunty</h2>
            <section className='flex'>
                <Cusin>Rofiq</Cusin>
                <Cusin hasFriend={true} money={money}>Sofiq</Cusin>
            </section>
        </div>
    );
};

export default Aunty;