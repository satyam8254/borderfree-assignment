import React from "react";
import Bodyoffer from "./bodyoffer1";
import Carousel from "./carousel";
import Header from "./header";
import Footer from "./footer";
function home(){
    return(
        <div>
            <Header/>
            <Carousel/>
            <Bodyoffer/>
            <Footer/>    
        </div>
    );
}
export default home;