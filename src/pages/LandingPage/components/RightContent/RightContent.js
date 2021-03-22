import React from 'react';
import './rightcontent.css';
import rightplaceholder from './assets/rightholder.svg'


const RightContent = ({header, main, sub, btn}) => {
    return (
        <div className='rightcontent'>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
            <div className='rightcontent__left'>
            <img src={rightplaceholder} alt='Logo' className='rightplaceholder__img' draggable='false'/>            
            </div>
            <div className='rightcontent__right'>
                <h4 className='rightcontent__header'>{header}</h4>
                <h2 className='rightcontent__main'>{main}</h2>
                <h3 className='rightcontent__sub'>{sub}</h3>
                <button className='rightcontent__btn'> {btn} </button>
            </div>
            
        </div>
    );
}


export default RightContent;