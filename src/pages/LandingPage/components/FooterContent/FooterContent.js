import React from 'react';
import logo1 from './assets/logo1.svg';
import logo2 from './assets/logo2.svg';
import logo3 from './assets/logo3.svg';

import './footercontent.css';


const FooterContent = () => {
    return (
        <div className='footer'>
            <div className='footer__left'>
                <h2 className='footer__credit'><span>Built with </span> 🔥 <span>in</span> open source</h2>
            </div>

            <div className='footer__right'>
                <img src={logo1} alt='Footer Logo' className='footer__logo'/>
                <img src={logo2} alt='Footer Logo' className='footer__logo'/>
                <img src={logo3} alt='Footer Logo' className='footer__logo'/>
            </div>
        </div>
    );
}

export default FooterContent;