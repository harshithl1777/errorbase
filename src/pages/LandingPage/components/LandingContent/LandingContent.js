import React from 'react';
import './landingcontent.css';


const LandingContent = ({header, main, sub}) => {
    return (
        <div className='landingcontent'>
            <div className='landingcontent__text'>
                <h2 className='landingcontent__main'>{main}</h2>
                <h3 className='landingcontent__sub'>{sub}</h3>
                <div className='landingcontent__buttons'>
                    <button className='landingsig__btn'> Sign up for free </button>
                    <button className='landingmore__btn'> Learn More </button>
                </div>
            </div>
        </div>
    );
}


export default LandingContent;