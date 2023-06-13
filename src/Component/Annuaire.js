import React from "react";
import axios from "axios" ; 
import '../Assets/CSS/Annuaire.css'
import { useState,useEffect } from "react";
import OneHistoric from "./OneHistoric"
import Contact from "./Contact"


function Annuaire (props) {

    const [SearchTerm,setSearchTerm]=useState("")

    return (
        <div id="Main-div-Annuaire">
            <div id="Historic"> 
                <h4> Historique des appels </h4>
                {
                    props.historique.map((item) => {
                        return (<OneHistoric Phone={item.Phone} Name={item.Name}/>)
                    })
                }
            </div>

            <div id="Annuaire">
                <div id="search">
                    <input type="text" id="searchTerm" value={SearchTerm} onChange={(e) => {setSearchTerm(e.target.value)}} name="SearchBar" placeholder="Chercher un contact, un numéro . . ."/>   
                    <i class="fa fa-search"></i>        
                </div>

                <div id="xdf-4456"> 
                   {
                        props.Annuaire.filter((item) => {
                            if (SearchTerm===""){
                                return item
                            }else if (item.Name.toLowerCase().includes(SearchTerm.toLowerCase())) {
                                return item
                            }
                        }).map((item) => {
                            return (<Contact Name={item.Name} Phone={item.Phone} key={item.ID} ID={item.ID}/>)
                        })
                   }
                </div>

            </div>
        </div>
    )
}

export default Annuaire;