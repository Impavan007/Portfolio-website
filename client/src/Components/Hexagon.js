import React from 'react';
import './Hexagon.css';

const Hexagon = ({svg,name}) => {
    return (
        <div className="hexagon mt-[12vh] sm:m-[8vh]">
         <center>  {svg}
            <br/><p></p>
         </center>
      <center> </center>  
        </div>
    );
};

export default Hexagon;
