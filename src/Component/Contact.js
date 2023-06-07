import "../Assets/CSS/Contact.css"

function Contact (props) 
{
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
    
            <button type='button' className='searchButton2' >
                <i className='fas fa-times'></i>
            </button>

            <button type='button' className='searchButton2'>
            <i className='fas fa-phone'></i>
            </button>
        </div>

        </div>
    )
}

export default Contact