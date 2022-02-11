import React from "react";
import Bodyoffer from "./bodyoffer1";
import Carousel from "./carousel";
import Header from "./header";
function home(){
    return(
        <div>
            <Header/>
            <Carousel/>
            <Bodyoffer/>
        </div>
    );
}
export default home;