import "../Assets/CSS/Contact.css"
import axios from "axios"
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; 

function Contact (props) 
{

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
                axios.post("http://192.168.5.133:8080/RefreshXML").then((resp) => {if(resp.data==="OK") {window.location.reload(false);}})
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
            <p> {props.Name}</p>
        </div>
   
        <div className='phone'>
            <i className='fa fa-phone'></i>
            <p>  {props.Phone} </p>
        </div>
   
        <div className='Btn'>
            <button type='button' className='searchButton2' >
                <i className='fas fa-edit'> </i>
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