import React from "react";


function CarCard({ImageURL, Name, Year, Price, Power, Torque}){
    console.log(Name)

    return(
            <div className = "card">
             <h1>{Name} {Year}</h1>
             <img src = {ImageURL} alt = {Name} style={{ width: "700px", height: "500px" }} />
             <h2>Price and Engine Specs</h2>
             <ul>
                 {
                     <>
                     <li>Price: {Price} AUD </li>
                     <li>Power: {Power} hp, Torque:{Torque} Nm</li>
                     </>
                     
                 }
             </ul>
            </div>   
         )
} 

export default CarCard