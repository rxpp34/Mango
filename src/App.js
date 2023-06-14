import React from "react";
import axios from "axios" ; 
import './Assets/CSS/App.css'
import { useState,useEffect } from "react";
import Logo from "./Assets/Images/logo.jpg"
import Annuaire from "./Component/Annuaire";
import AllCall from "./Component/AllCall";
import { useNavigate } from "react-router-dom";
import AddContact from "./Component/AddContact";

function App() {

  const Extensions=[201,202,203,204,205,301,302,303,101,102,103]
  const navigate=useNavigate()

  if(!localStorage["exten"])
  {
      navigate("/Auth")
  }
  else if(!Extensions.includes(parseInt(localStorage["exten"])))
  {
    navigate("/Auth")
  }


  const [Switcher,setSwitcher] =useState(0)

  const CSSButtonDisabled = {
    fontFamily: 'Comfortaa',
    fontSize: '1.6em',
    width: '25%',
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
    width: '25%',
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
            url : "http://192.168.5.133:8080/GetHistoricall/"+localStorage['exten']
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
      <img src={Logo} id="AppLogo" style={{width :'350px',borderRadius :'7px',border :'3px solid #1D3A4D'}}/>
      <div id="DivButtonSwitcher">
        <button style={Switcher===0 ? CSSButtonEnabled : CSSButtonDisabled} onClick={() => {setSwitcher(0)}}> Annuaire </button>
        <button style={Switcher===1 ? CSSButtonEnabled : CSSButtonDisabled} onClick={() => {setSwitcher(1)}}> Tous les appels </button>
        <button style={Switcher===2 ? CSSButtonEnabled : CSSButtonDisabled} onClick={() => {setSwitcher(2)}}> + Ajouter un contact </button>
      </div>

      <div id="Display">
        {
          Switcher===0 ?  <Annuaire historique={historic} Annuaire={AllContact}/> : Switcher===1 ?  <AllCall AllCall={AllCalls}/> : Switcher===2  ? <AddContact/> : <p> null</p>
        }

      </div>
    </div>
  );
}

export default App;
