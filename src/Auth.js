import React from "react";
import axios from "axios" ; 
import './Assets/CSS/Auth.css'
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./Assets/Images/logo.png"

function Auth () 
{
    const [exten,setExten]=useState("")
    const Extensions=[201,202,203,204,205,301,302,303,101,102,103]
    const [ErrorMode,setErrorMode]=useState(false)
    const navigate=useNavigate()

    function Open()
    {
        if(Extensions.includes(parseInt(exten)))
        {
            localStorage["exten"]=exten ; 
            navigate("/App")
        }
        else
        {
            setErrorMode(true)
        }
    }

    return (
        <div id='LoginForm'> 
            <img src={Logo}/>
            <input placeholder="Ton extension..." value={exten} onChange={(e) =>{setExten(e.target.value)}}/>
            {
                ErrorMode ? <p style={{color : 'red' , fontWeight :'bold'}}> Votre extension n'existe pas.</p> : <p style={{color : 'white' , fontWeight :'bold'}}> Votre extension n'existe pas.</p>
            }
                
            <button onClick={() => {Open()}}> OPEN </button>

           
        </div>
    )
}


export default Auth ; 