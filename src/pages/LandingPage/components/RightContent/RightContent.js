import React from 'react';
import './rightcontent.css';
import rightplaceholder from './assets/rightholder.svg'


const RightContent = ({header, main, sub, btn}) => {
    return (
        <div className='rightcontent'>
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