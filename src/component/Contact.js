import React from 'react';
import './Cntact.css';

 const Contact = props => { 
    return (
     <div ClassName= "contact">
      <img className='avatar' src={avatar}/>    
      <div>         
       <div className="name">{props.name}</div>
       <div className="status">
        <span className={props.online ? 'status-online' : 'status-offline'}></span>
        <p className= "status-text">{props.online?'online':'offline'}</p>
        </div>
      </div>
    </div>  
    );
};

 export default Contact;
