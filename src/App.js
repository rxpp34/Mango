import React from "react";
import axios from "axios" ; 
import './Assets/CSS/App.css'
import { useState,useEffect } from "react";
import Logo from "./Assets/Images/logo.png"
import Annuaire from "./Component/Annuaire";
import AllCall from "./Component/AllCall";

function App() {
  const [Switcher,setSwitcher] =useState(false)
  const CSSButtonDisabled = {
    fontFamily: 'Comfortaa',
    fontSize: '1.6em',
    width: '40%',
    backgroundColor: '#f2f2f2',
    border: 'none',
    color : '#1D3A4D' ,
    fontWeight: 'bold',
    borderBottom:'4px solid #1D3A4D',
    cursor :'pointer'
  }

  const CSSButtonEnabled = {
    fontFamily: 'Comfortaa',
    fontSize: '1.6em',
    width: '40%',
    backgroundColor: '#1D3A4D',
    border: 'none',
    color : 'white' ,
    fontWeight: 'bold',
    borderBottom:'4px solid #1D3A4D',
    borderRadius :'7px',
    cursor :'pointer'
  }

  const [historic,setHistoric]=useState([])
  const [AllContact,setAllContact]=useState([])
  const [AllCalls,setAllCalls]=useState([])


    useEffect(() => {
        axios({
            method : "GET",
            url : "http://192.168.5.133:8080/GetHistoricall"
        }).then((resp) => {
            setHistoric(resp.data)
        })

        axios({
            method : "GET",
            url :"http://192.168.5.133:8080/GetAllContact"
        }).then((resp) => {
            setAllContact(resp.data)
        })

        axios({
          method : "GET",
          url :"http://192.168.5.133:8080/GetAllCall"
      }).then((resp) => {
          setAllCalls(resp.data)
      })


    },[])


  function SwitchDisplay () {
    if(Switcher)
    {
      setSwitcher(false)
    }
    else if(!Switcher)
    {
      setSwitcher(true)
    }
  }

  return (
    <div id="App">
      <img src={Logo} id="AppLogo"/>
      <div id="DivButtonSwitcher">
        <button style={Switcher ? CSSButtonDisabled : CSSButtonEnabled} onClick={() => {SwitchDisplay()}}> Annuaire </button>
        <button style={Switcher ? CSSButtonEnabled : CSSButtonDisabled} onClick={() => {SwitchDisplay()}}> Tous les appels </button>
      </div>

      <div id="Display">
        {
          !Switcher ?  <Annuaire historique={historic} Annuaire={AllContact}/> : <AllCall AllCall={AllCalls}/>
        }

      </div>
    </div>
  );
}

export default App;
