import React from 'react';
import './centercontent.css';


const CenterContent = () => {
    return (
        <div className='centercontent'>
            <div className='centercontent__text'>
                <h4 className='centercontent__heading'>About</h4>
                <h2 className='centercontent__main'>Built by developers, for developers and the <br/> open source community</h2>
                <h3 className='centercontent__sub'>With Wildfire, you don’t have to choose between quality and quantity - you can get both. Wildfire allows you to target your surveys towards specific industries, geographic regions and website traffic.</h3>
                <button className='centercontent__btn'> Read about us</button>
            </div>
        </div>
    );
}


export default CenterContent;