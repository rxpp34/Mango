import "../Assets/CSS/Contact.css"
import axios from "axios"
import { useState } from "react";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; 

function Contact (props) 
{

    const [SwitchEditMode,setSwitchEditMode]=useState(false)
    const [InputStyle,setInputStyle]=useState({
        marginLeft: '10px',
        fontWeight: 'bold',
        fontFamily: 'Comfortaa',
        border:'none' ,
        color : '#1D3A4D' ,
        backgroundColor: '#F7FAFC',
    })

    const [DisabledInput,setDisabledInput]=useState(true)
    const [Phone,setPhone]=useState(props.Phone)
    const [Name,setName]=useState(props.Name)

    function Call() 
    {
        try 
        {   
            axios.post("http://192.168.5.133:8080/PerformCall/"+localStorage["exten"]+'/' + props.Phone + "/" + props.Name)

        }
        catch(e)
        {   
            console.log(e)
        }
        window.location.reload(false);
    }

    function DeleteContact() 
    {
        
        axios({
            method :'post',
            url :"http://192.168.5.133:8080/DeleteContact/"+props.ID
        }).then((resp) => {
            if(resp.data==="OK")
            {
                axios.post("http://192.168.5.133:8080/RefreshXML").then((resp) => {
            })
            }
        })
        window.location.reload();
    }

    function SwitchMode() 
    {
        setSwitchEditMode(true)
        setDisabledInput(false)
        setInputStyle({
            marginLeft: '10px',
            fontWeight: 'bold',
            fontFamily: 'Comfortaa',
            border:'2px solid #1D3A4D' ,
            borderRadius :'7px',
            color : '#1D3A4D' ,
            backgroundColor: '#F7FAFC',
            padding :'5px'
        })
    }

    function EditContact() 
    {
        setSwitchEditMode(false)
        setDisabledInput(true)
        setInputStyle({
            marginLeft: '10px',
            fontWeight: 'bold',
            fontFamily: 'Comfortaa',
            border:'none' ,
            color : '#1D3A4D' ,
            backgroundColor: '#F7FAFC',
        })

        axios({
            method :'POST',
            url :'http://192.168.5.133:8080/EditContact/'+props.ID+"/"+Name+"/"+Phone
        }).then((resp) => {
            if(resp.data==="OK")
            {
                window.location.reload()
            }
        })

    }

    function ConfirmDeleteContact() 
    {
        confirmAlert({
            title: 'Confirmation',
            message: 'Êtes-vous sure de vouloir supprimer ce contact ?',
            buttons: [
              {
                label: 'Absolument',
                onClick: () => DeleteContact() 
              },
              {
                label: 'Pas du tout',
                
              }
            ]
          });
    }



    return (

        <div id="Contact"> 
            <div className='person'> 
                <i className='fa fa-user'></i>
                <input value={Name} style={InputStyle} disabled={DisabledInput} onChange={(e) =>{setName(e.target.value)}}/> 
            </div>
    
            <div className='phone'>
                <i className='fa fa-phone'></i>
                <input value={Phone} style={InputStyle} disabled={DisabledInput} onChange={(e) =>{setPhone(e.target.value)}}/> 
            </div>
    
            <div className='Btn'>
                <button type='button' className='searchButton2' >
                    { SwitchEditMode ? <i class="fa-solid fa-check" onClick={() =>{EditContact()}}></i> : <i className='fas fa-edit' onClick={() => {SwitchMode()}}> </i>}
                </button>
        
                <button type='button' className='searchButton2' onClick={() => (ConfirmDeleteContact())}>
                    <i className='fas fa-times'></i>
                </button>

                <button type='button' className='searchButton2' onClick={() => (Call())}>
                    <i className='fas fa-phone'></i>
                </button>
            </div>
        </div>
    )
}

export default Contact