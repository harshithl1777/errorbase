import React from 'react';
import CenterContent from './components/CenterContent/CenterContent';
import FooterContent from './components/FooterContent/FooterContent';
import LandingContent from './components/LandingContent/LandingContent';
import LeftContent from './components/LeftContent/LeftContent';
import NavBar from './components/NavBar/NavBar';
import RightContent from './components/RightContent/RightContent';

const LandingPage = () => {
    return (

        <div>
            <NavBar/>
            <LandingContent main={["Debugging tips, tricks and solutions", <br/>, "straight to the command line"]} sub="That’s why GitRadar makes it easy to get notified about events your version control system. With GitRadar, you can get notifications when your teammate commits and when your latest release is deployed, straight to Discord."  />
            <LeftContent header="FEATURES" main={["Get full causes, solutions and tips", <br/>, "and tricks logged to your terminal"]} sub="Wildfire replaces website advertisements with interactive surveys that users are asked to answer. This means that your surveys are shown to a variety of users on so many websites. The result? More data than you could ever get with smaller surveys."/>
            <RightContent header="FEATURES" main={["Search Stack Overflow and", <br/>, "Stack Exchange in an instant"]} sub="With Wildfire, you don’t have to choose between quality and quantity - you can get both. Wildfire allows you to target your surveys towards specific industries, geographic regions and website traffic." btn="Get Started"/>
            <LeftContent header="FEATURES" main={["Realtime alerts with the power of ", <br/>, "integrated webhooks"]} sub="Wildfire replaces website advertisements with interactive surveys that users are asked to answer. This means that your surveys are shown to a variety of users on so many websites. The result? More data than you could ever get with smaller surveys."/>
            <CenterContent/>
            <RightContent header="OPEN SOURCE" main={["Built in open source and fully free ", <br/>, "for anyone to use and learn from"]} sub="With Wildfire, you don’t have to choose between quality and quantity - you can get both. Wildfire allows you to target your surveys towards specific industries, geographic regions and website traffic."  btn="See repository"/>
            <FooterContent/>
        </div>
        
    );
}


export default LandingPage;