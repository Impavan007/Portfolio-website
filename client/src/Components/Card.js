import React from 'react';

const Card = ({ product }) => {
  return (
    <div key={product.id} className="group relative Cards ">
       <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-sm bg-black  z-[10] text-white px-[3vw] py-[2vh] hidden group-hover:block">
       <a href={product.href}  target="_blank">  View Details</a> 
        </button>
      <div className='absolute bg-gray-900  opacity-75 h-full w-full hidden group-hover:block  '>
       
      </div>
        
      <div className="relative h-[20vh] w-[80vw] overflow-hidden bg-gray-200 lg:aspect-none lg:h-[25vh]  lg:w-[25vw]">
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className="lg:h-full h-[25vh] w-full object-cover object-center lg:w-[25vw]"
        />
       
      </div>
      <div className="flex bg-white text-black text-[4vh] justify-center lg:w-[25vw]">
        <div>
          <h1>{product.name}</h1>
          <center>
            <p className="mt-1 text-sm">{product.color}</p>
          </center>
        </div>
      </div></div>
  );
};

export default Card;
