import React from "react";
import Bodyoffer from "./bodyoffer1";
import Carousel from "./carousel";
import Header from "./header";
import Footer from "./footer";
import Body from "./body";
function home(){
    return(
        <div>
            <Header/>
            <Carousel/>
            <Bodyoffer/>
            <Body/>
            <Footer/>    
        </div>
    );
}
export default home;