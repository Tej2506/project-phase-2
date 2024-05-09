import React from 'react'


function DeleteCar({id, allCars, setcarInfo}){

    function DeleteEntry(id){
        fetch(`http://localhost:3000/Cars/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':"application/json"
            }
            })
            .then(res => res.json())
            .then(car => console.log(car))
    }

    function handleclick(){
        DeleteEntry(id)
        const newCarList = allCars.filter((car=>car.id!== id))
        setcarInfo(newCarList)
     }

    return(
        <button onClick={handleclick}>Delete</button>
    )
}

export default DeleteCar