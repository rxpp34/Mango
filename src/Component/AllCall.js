import React from "react";
import axios from "axios" ; 
import '../Assets/CSS/AllCall.css'
import { useState,useEffect } from "react";
import OneCall from "./OneCall";

function AllCall (props) {

    return (
        <div id="Main-div-AllCAll">
            {
                props.AllCall.map((item) => {
                    return (<OneCall src={item.src} answerdate={item.answerdate} billsec={item.billsec} 
                        channel={item.channel} dstchannel={item.dstchannel} dst={item.dst} lastdata={item.lastdata}/>)
                })
            }
        </div>
    )


}


export default AllCall