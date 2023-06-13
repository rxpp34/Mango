import '../Assets/CSS/OneHistoric.css'
import axios from "axios"


function OneHistorical (props) {

    function Call() 
    {
        try 
        {   
            axios.post("http://192.168.5.133:8080/PerformCall/202/" + props.Phone + "/" + props.Name)

        }
        catch(e)
        {   
            console.log(e)
        }
        window.location.reload(false);
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