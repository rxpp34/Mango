import '../Assets/CSS/OneHistoric.css'

function OneHistorical (props) {
    return ( 
        <div id="Call">
            <div style={{width : '70%',display :'flex',flexDirection :'column',alignItems :'center'}}>
                <p> {props.Phone}</p>
                <p> {props.Name} </p>
            </div>
    
            <div style={{width : '30%', display : 'flex'}}>
                <button class='CallButton'>
                    <i class='fas fa-phone'></i>
                </button>
            </div>
        </div>
    )

}

export default  OneHistorical