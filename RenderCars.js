import React from 'react';
import CarCard from './CarCard';



function RenderCars({ allCars,setcarInfo }) {
    return (
        <>
            {allCars.map((carObj) => (
                <CarCard
                    key={carObj.id}
                    id = {carObj.id}
                    ImageURL={carObj.ImageURL}
                    Name={carObj.Name}
                    Year={carObj.Year}
                    Price={carObj.Price}
                    Power={carObj.Power}
                    Torque={carObj.Torque}
                    Owned = {carObj.Owned}
                    setcarInfo={setcarInfo}
                    allCars={allCars}

                />
                
            ))}
            
        </>
        
    );
}

export default RenderCars;
