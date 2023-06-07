import "../Assets/CSS/OneCall.css"
import fleche from "../Assets/Images/fleche.png"

function OneCall(props) {
    return (
        <div id="OneCall-div">
            { props.src==="33411932752" ? 
                <i style={{marginLeft : '2%'}}class="fa-solid fa-arrow-trend-up"></i>
                :
                <i style={{marginLeft : '2%'}} class="fa-solid fa-arrow-trend-up fa-rotate-180"></i>
            }


            {
                props.src==="33411932752" ? 
                <p style={{marginLeft : '2%',marginRight :'2%'}}> {props.dstchannel} </p> 

                :

                <p style={{marginLeft : '2%',marginRight :'2%'}}>  {props.dstchannel.split("/")[1]}</p> 
            }
                     
            
            <p> ------------------ </p>
            <i class="fa-regular fa-angles-right" style={{color: '#ffffff'}}></i>
            {
                props.src==="33411932752" ? 
                <p style={{marginLeft : '2%',marginRight :'2%'}}> {props.dstchannel} </p> 

                :

                <p style={{marginLeft : '2%',marginRight :'2%'}}>  {props.src}</p> 
            }
            <p style={{marginLeft : '15%'}}> {props.answerdate} </p>
            <p style={{marginLeft : '15%'}}> {props.billsec}</p>

            <i style={{marginLeft : '10%',cursor :'pointer'}} class='fas fa-phone'></i>
        </div>
    )
}

export default OneCall 