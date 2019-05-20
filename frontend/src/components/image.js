import React from 'react';
import moment from 'moment';

export default ({ image, timestamp }) => {
  return (
    <div className='col - ' >
    <div className='row' >
     <div className="card bg-dark text-white mb-2" style={{ width: '20%', height: '20%' }}>
      <img src={image} className="card-img" alt="..." />
      <div className="card-img-overlay">
        <span className="card-text" style={ { backgroundColor: 'rgba(0, 0, 0, 0.3)' } }>Uploaded {moment(timestamp).fromNow()}</span>
      </div>
    </div>      
    </div>  
    </div>

  )
}