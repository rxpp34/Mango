import "../Assets/CSS/OneCall.css"
import { useState,useEffect } from "react"
import axios from "axios"

function OneCall(props) {
    const [dest,setDest]=useState("")
    const [_channel,setChannel]=useState("")
    const [time,setTime]=useState("")

    function Call() 
    {
        try 
        {   
            axios.post("http://192.168.5.133:8080/PerformCall/202/" + props.src + "/" + "inconnue")

        }
        catch(e)
        {   
            console.log(e)
        }
        ;
    }

    useEffect(() => {
        if(props.dstchannel.includes("203"))
        {
            setDest('Adel')
        }
        else if(props.dstchannel.includes('204'))
        {
            setDest('Nadjib')
        }
        else if(props.dstchannel.includes('205'))
        {
            setDest("Thibaut")
        }
        else if(props.dstchannel.includes("299"))
        {
            setDest("Appel Manqué")
        }
        else
        {
            setDest("Appel Manqué")
        }

        if(props.channel.includes("203"))
        {
            setChannel('Adel')
        }
        else if(props.channel.includes('204'))
        {
            setChannel('Nadjib')
        }
        else if(props.channel.includes('205'))
        {
            setChannel("Thibaut")
        }
        else
        {
            setChannel(props.channel)
        }
        
        setTime(Math.floor(props.billsec / 60)+"m"+props.billsec % 60+"s")

    }, [])

    
    return (
        <div id="OneCall-div">
            
            { // ICONE SELON LE TYPE D'APPEL
                props.src==="33411932752" ? 
                <div style={{width :'3%',textAlign :'center'}}><i style={{fontSize :'1.6em'}}class="fa-solid fa-arrow-trend-up"></i></div>
                : 
                props.lastdata==="records/SOWILO-TECH-OQP" ? 
                <div style={{width :'3%',textAlign :'center'}}><i class="fa-solid fa-square-xmark" style={{color: '#ff0000',marginLeft : '2%',fontSize :'1.6em'}}></i>   </div>      
                : 
                props.lastdata==="records/SOWILO-CLOSED" ? 
                <div style={{width :'3%',textAlign :'center'}}><i class="fa-solid fa-square-xmark" style={{color: '#ff0000',marginLeft : '2%',fontSize :'1.6em'}}></i> </div>
                :
                props.dstchannel.includes("Local/299")  ? 
                <div style={{width :'3%',textAlign :'center'}}><i class="fa-solid fa-square-xmark" style={{color: '#ff0000',marginLeft : '2%',fontSize :'1.6em'}}></i> </div>

                :
                <div style={{width :'3%',textAlign :'center'}}><i style={{marginLeft : '2%',fontSize :'1.6em',color:"#ODE732"}}class="fa-solid fa-arrow-trend-down"></i></div>
            }


            { //source de l'appel
                props.src==="33411932752" ? 
                <div style={{width :'10%',marginLeft:'2%',textAlign:'center'}}><p style={{marginLeft : '2%',marginRight :'7.7%'}}> {_channel}</p></div>                
                : 
                <div style={{width :'10%',marginLeft:'2%',textAlign:'center'}}><p style={{marginLeft : '2%',marginRight :'2%'}}> {props.src}</p>    </div>         
            }

            {// Sens de l'appel
                props.src==="33411932752" ? 
                <div style={{width :'12%',marginLeft:'2%',textAlign:'center'}}><p> -------------&#187;&#187;&#187;   </p></div>
                :
                <div style={{width :'12%',marginLeft:'2%',textAlign:'center'}}><p> &#171;&#171;&#171;-------------</p></div>


            }
            

            { // destination de l'appel
                props.src==="33411932752" ? 
                <div style={{width :'12%',marginLeft:'2%',textAlign:'center'}}><p style={{marginLeft : '2%',marginRight :'2%'}}> {props.dst}</p></div>                
                : 
                <div style={{width :'12%',marginLeft:'2%',textAlign:'center'}}><p style={{marginLeft : '2%',marginRight :'2%'}}> {dest}</p></div> 
            }

            { // dateTime de l'appel
                props.lastdata==="records/SOWILO-TECH-OQP" ||  props.lastdata==="records/SOWILO-CLOSED" ?
                <div style={{width :'15%',marginLeft:'2%',textAlign:'center'}}><p style={{marginLeft : ''}}> {props.answerdate} </p></div>
                :
                props.src==="33411932752" ? 
                <div style={{width :'15%',marginLeft:'2%',textAlign:'center'}}><p style={{marginLeft : ''}}> {props.answerdate} </p></div>
                :
                <div style={{width :'15%',marginLeft:'2%',textAlign:'center'}}><p style={{}}> {props.answerdate} </p></div>

            }
            
            <p style={{marginLeft : '15%'}}> {time}</p> 
            {
                props.src!=="33411932752" ? <i style={{marginLeft : '10%',cursor :'pointer'}} class='fas fa-phone' onClick={() =>{Call()}}></i> : <i style={{marginLeft : '10%',color :'white'}} class='fas fa-phone'></i>
            }
            
  
        </div>
    )
}

export default OneCall 