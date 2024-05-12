import React, { useEffect, useState } from "react";
import Form from './Form';
import RenderCars from "./RenderCars";


// const Cars=[
//   {
//     "id": 1,
//     "Name": "M340i",
//     "Year": "2019",
//     "Price": "64000",
//     "Power": 382,
//     "Torque": 500,
//     "Engine": "B9, 3 Liter Turbocharged I6",
//     "ImageURL": "https://www.daehler-tuning.com/wp-content/uploads/2021/07/BMW-3-series-Sedan-M340i-xDrive-G20-12-min.jpg"
//   },
//   {
//     "id": 2,
//     "Name": "Audi S5",
//     "Year": 2018,
//     "Price": "55000",
//     "Power": 350,
//     "Torque": 500,
//     "Engine": "B9, 3 Liter Turbocharged V6",
//     "ImageURL": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Audi/S5-Sportback/10569/1689596046874/front-left-side-47.jpg"
//   },
//   {
//     "id": 3,
//     "Name": "Audi S4",
//     "Year": "2018",
//     "Price": 45000,
//     "Power": 350,
//     "Torque": 500,
//     "Engine": "B9, 3 Liter Turbocharged V6",
//     "ImageURL": "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/1-audi-s4-tdi-2019-rt-hero-front.jpg?itok=Mbv2Etoe"
//   },
//   {
//     "id": 4,
//     "Name": "X3 M40i",
//     "Year": "2018",
//     "Price": 48000,
//     "Power": 355,
//     "Torque": 500,
//     "Engine": "B9, 3 Liter Turbocharged I6",
//     "ImageURL": "https://images.carexpert.com.au/resize/3000/-/app/uploads/2022/05/220503_BMW-X3-M40i_Still-42.jpg"
//   },
//   {
//     "id": 5,
//     "Name": "BMW 330i",
//     "Year": "2019",
//     "Price": 38000,
//     "Power": 258,
//     "Torque": 400,
//     "Engine": "B48, 2 Liter Turbocharged",
//     "ImageURL": "https://i.redd.it/sz4mubhvaew51.jpg"
//   },
//   {
//     "id": 6,
//     "Name": "Mercedes C43 AMG, 2018",
//     "Year": "2018",
//     "Price": "55000",
//     "Power": 385,
//     "Torque": 520,
//     "Engine": "3 Liter Turbocharged V6",
//     "ImageURL": "https://www.cnet.com/a/img/resize/8e0918ea378cd814fc3fa79678fface4190bef5b/hub/2018/03/06/9b4170ff-4089-4fe5-838d-500a2c7b80e5/001-mercedes-amg-c43.jpg?auto=webp&fit=crop&height=675&width=1200"
//   },
//   {
//     "Name": "BMW X3M",
//     "Year": "2018",
//     "Price": "78000",
//     "Power": "510",
//     "Torque": "650",
//     "Engine": "B58, Flat six Twin Turbocharged",
//     "ImageURL": "https://i.ytimg.com/vi/Uufq6MxkgJM/maxresdefault.jpg",
//     "id": 7
//   }
// ]


function App() {

  const [order,setSortOrder] = useState("default")
  const [carInfo,setcarInfo] = useState([])

  function FetchData(setcarInfo){
    useEffect(()=>{
      fetch('http://localhost:3000/Cars')
    .then(res => {
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }
        return res.json();
    })
    .then(carData => {
        setcarInfo(carData)   
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });


    },[])
    
}
FetchData(setcarInfo)

  function handleSelectedChange(event){
    setSortOrder(event.target.value)
    SortData(carInfo,(event.target.value))
  }
  
  function SortData(carInfo,order){
    if (order === "default") {
        window.location.reload()
    } 
    else if (order === "High to Low") {
      setcarInfo(carInfo.sort((a, b) => b.Price - a.Price));
      console.log(carInfo)
    } 
    else {
      setcarInfo(carInfo.sort((a, b) => a.Price - b.Price));
      console.log(carInfo)
    }

  }


  return (
    <div className="App">
      <header>
        Dream Cart
      </header>
      <main>
        <p>Price</p> 
        <select value ={order} onChange={handleSelectedChange}>
          <option value="default">default</option>
          <option value="High to Low">High to Low</option>
          <option value="Low to High">Low to High</option>
        </select>
        <Form carInfo={carInfo} setcarInfo={setcarInfo}/>
        <RenderCars allCars={carInfo} setcarInfo={setcarInfo} />
      </main>
    </div>
  )
}

export default App;
