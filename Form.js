import React, {useState} from 'react';



function Form({carInfo,setcarInfo}){

    const[carName, setName]= useState((""))
    const[ImageURL, setImageURL]= useState("")
    const[carPrice, setPrice]= useState((""))
    const[carPower, setPower]= useState((""))
    const[carTorque, setTorque]= useState((""))
    const[carYear, setYear]= useState((""))

    function UploadCarData(carObj){
        fetch("http://localhost:3000/Cars",{
            method:'POST',
            headers:{
                'Content-Type':"application/json"
            },
            body: JSON.stringify(carObj)
        })
        .then(res => res.json())
        .then(car => console.log(car))
    }


    function handleSubmit(event){
        event.preventDefault()
        console.log(event.target.name.value)
        let newCar = {"Name": carName, "ImageURL": ImageURL, "Year":carYear, "Price":carPrice, "Power":carPower, "Torque":carTorque }
        setcarInfo([...carInfo, newCar])
        UploadCarData(newCar)
        setName("")
        setImageURL("")
        setYear("")
        setPower("")
        setPrice("")
        setTorque("")

    
    }
    function handleChange(event){
        if(event.target.id==="carName"){
            setName(event.target.value)
        }
        else if(event.target.id==="ImageURL") {
            setImageURL(event.target.value)
        }
        else if(event.target.id==="carPrice") {
            setPrice(event.target.value)
        }
        else if(event.target.id==="carPower") {
            setPower(event.target.value)
        }
        else if(event.target.id==="carTorque") {
            setTorque(event.target.value)
        }
        else if(event.target.id==="carYear") {
            setYear(event.target.value)
        }

    }
    
    return(
        <form onSubmit={handleSubmit}>
            <h1>Enter Car Details</h1>
            <label htmlFor="carName">Name</label>
            <input type="text" id="carName" value={carName} onChange={handleChange}/>
            <label htmlFor="ImageURL">ImageURL</label>
            <input type="text" id="ImageURL" value={ImageURL} onChange={handleChange}/>
            <label htmlFor="carPrice">Price</label>
            <input type="text" id="carPrice" value={carPrice} onChange={handleChange}/>
            <label htmlFor="carYear">Year</label>
            <input type="text" id="carYear" value={carYear} onChange={handleChange}/>
            <label htmlFor="carPower">Power</label>
            <input type="text" id="carPower" value={carPower} onChange={handleChange}/>
            <label htmlFor="carTorque">Torque</label>
            <input type="text" id="carTorque" value={carTorque} onChange={handleChange}/>
            <input type="submit" value="Submit Car Details"/>
        </form>
    )
}

export default Form