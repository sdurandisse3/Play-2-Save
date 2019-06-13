import React from 'react';
import moment from 'moment';

export default ({ image, timestamp }) => {
  return (
        <div className="card bg-dark text-white mb-2 " style={{ width: '100%', marginTop:'1rem'}}>
          <img src={image} className="card-img-top" style={{ width:'100%'}} alt="..." />
          <div className="card-img-overlay">
          <div className="row">
          <span className="card-text" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>Uploaded {moment(timestamp).fromNow()}</span>
        
          </div>
            </div>
        </div>
  );
};