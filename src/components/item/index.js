import React from 'react';
import './style.css';

const Item = ({setElem, data}) => (
    <div className={setElem ? null : 'item'}>
        <img src={data.img} alt="img"/>
        <p>{data.text}</p>
    </div>
);

export default Item;