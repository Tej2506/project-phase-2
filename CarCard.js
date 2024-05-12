import React, { useState } from "react";
import DeleteCar from "./Button";


function CarCard({id, ImageURL, Name, Year, Price, Power, Torque, Owned, setcarInfo, allCars }){

    const [newOwned, setnewOwned]= useState(Owned) 

    function UpdatedCarinfo(id,Cars,checked){
        return Cars.map((car)=>{
            if(car.id===id){
                car.Owned=checked;
                return car;
            }
            else{
                return car;
            }
        })

    }

    function handleCompleted(event){
        setnewOwned(event.target.checked)
        console.log(event.target.checked)
        setcarInfo(UpdatedCarinfo(event.target.id,allCars,event.target.checked))
        const newCar = {"Name": Name, "ImageURL": ImageURL, "Year":Year, "Price":Price, "Power":Power, "Torque":Torque, "Owned":event.target.checked}

        fetch(`http://localhost:3000/Cars/${event.target.id}`,{
                method:'PATCH',
                headers:{
                    'Content-Type':"application/json"
                },
                body: JSON.stringify(newCar)
            })
            .then(res => res.json())
            .then(console.log(newCar))
        
  
    }
    
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
             <label>Owned?<input id= {id} type="checkbox" onChange={handleCompleted} checked={newOwned}/></label> 
             <DeleteCar id = {id} allCars={allCars} setcarInfo={setcarInfo}/>
            </div>   
         )
} 

export default CarCard