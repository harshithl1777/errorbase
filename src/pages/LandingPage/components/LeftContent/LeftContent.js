import React from 'react';
import placeholder from "./assets/holder.svg";
import './leftcontent.css';


const LeftContent = ({header, main, sub}) => {
    return (
        <div className='leftcontent'>
            
            <div className='leftcontent__left'>
                <h4 className='leftcontent__header'>{header}</h4>
                <h2 className='leftcontent__main'>{main}</h2>
                <h3 className='leftcontent__sub'>{sub}</h3>
                <button className='leftcontent__btn'> Get started </button>
            </div>

            <div className='leftcontent__right'>
            <img src={placeholder} alt='Logo' className='placeholder__img' draggable='false'/>            
            </div>
            
        </div>
    );
}


export default LeftContent;