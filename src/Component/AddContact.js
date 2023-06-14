import React from "react";
import axios from "axios" ; 
import '../Assets/CSS/AddContact.css'
import { useState,useEffect } from "react";

function AddContact()
{
    const [Nom,setNom]=useState("")
    const [Numero,setNumero]=useState("")

    function SaveContact() 
    {
        axios({
            method :'POST',
            url : 'http://192.168.5.133:8080/AddContact/'+Nom+"/"+Numero
        }).then((resp) => {
            if(resp.data==="OK")
            {
                axios.post("http://192.168.5.133:8080/RefreshXML").then((resp) => {if(resp.data==="OK") {window.location.reload(false);}})
            }
        })
    }

    return(
        <div id="EditComponent">
            <i class="fa-solid fa-address-book" style={{color :"#253b5f"}}></i>
            <p> Nouveau Contact</p>
            <input placeholder="Nom" value={Nom} onChange={(e) => {setNom(e.target.value)}}></input>
            <input placeholder="Numéro" value={Numero} onChange={(e) => {setNumero(e.target.value)}}></input>
            <button onClick={() => {SaveContact()}}> Enregistrer </button>
        </div>
    )
}


export default AddContact ; 