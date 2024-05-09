import React from "react";
import DeleteCar from "./Button";


function CarCard({id, ImageURL, Name, Year, Price, Power, Torque, setcarInfo, car, allCars }){

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
             <DeleteCar id = {id} allCars={allCars} setcarInfo={setcarInfo}/>
            </div>   
         )
} 

export default CarCard