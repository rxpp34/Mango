import '../Assets/CSS/OneHistoric.css'
import axios from "axios"


function OneHistorical (props) {

    function Call() 
    {
      
        axios.post("http://192.168.5.133:8080/PerformCall/"+localStorage["exten"]+'/' + props.Phone + "/" + props.Name)
        setTimeout(1000,window.location.reload())
        
    }

    return ( 
        <div id="Call">
            <div style={{width : '70%',display :'flex',flexDirection :'column',alignItems :'center'}}>
                <p> {props.Name} </p>
                <p> {props.Phone}</p>
            </div>
    
            <div style={{width : '30%', display : 'flex'}}>
                <button class='CallButton' onClick={() => {Call()}}>
                    <i class='fas fa-phone'></i>
                </button>
            </div>
        </div>
    )

}

export default  OneHistorical