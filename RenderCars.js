import React from 'react';
import CarCard from './CarCard';

function RenderCars({ cars }) {
    return (
        <>
            {cars.map((carObj) => (
                <CarCard
                    key={carObj.id}
                    ImageURL={carObj.ImageURL}
                    Name={carObj.Name}
                    Year={carObj.Year}
                    Price={carObj.Price}
                    Power={carObj.Power}
                    Torque={carObj.Torque}
                />
            ))}
        </>
    );
}

export default RenderCars;
