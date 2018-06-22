import React from 'react';
import './style.css';

const Item = ({click, data}) => (
    <div className={click ? null : 'item'}>
        <img src={data.img} alt="img"/>
        <p>{data.text}</p>
    </div>
);

export default Item;