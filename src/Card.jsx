import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div className="card">
      
      <div className="card-content hover:shadow-2xl h-60 w-80 rounded-2xl my-60 border-4 border-purple-200 py-24 bg-purple-100 ">
        <h2 className="card-title flex justify-center ">{title}</h2>
        <p className="card-description flex justify-center">{description}</p>
        
      </div>
    </div>
  );
};

export default Card;
