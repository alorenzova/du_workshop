import './index.css';

export const Venue = (props) => {
    return (
        <div className='venue'>            
            <h3>{props.venueName}</h3>
            <div className='venue__info'>
                <div className='venue__photo'>
                    <img src={props.photo} alt="bootcamp" /> 
                </div>
                <div className='venue__where'>
                    <p><strong>Street: </strong> <br /> {props.street}</p>
                    <p><strong>City: </strong> <br /> {props.city}</p>
                    
                </div>
            </div>
            <p><strong>Where: </strong> {props.instructions}</p>

        </div>
    )
}