import React, { useState } from "react";
import CarCard from './CarCard'

const Cars=[
  {
    "id": 1,
    "Name": "M340i",
    "Year": "2019",
    "Price": "64000",
    "Power": 382,
    "Torque": 500,
    "Engine": "B9, 3 Liter Turbocharged I6",
    "ImageURL": "https://www.daehler-tuning.com/wp-content/uploads/2021/07/BMW-3-series-Sedan-M340i-xDrive-G20-12-min.jpg"
  },
  {
    "id": 2,
    "Name": "Audi S5",
    "Year": 2018,
    "Price": "55000",
    "Power": 350,
    "Torque": 500,
    "Engine": "B9, 3 Liter Turbocharged V6",
    "ImageURL": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Audi/S5-Sportback/10569/1689596046874/front-left-side-47.jpg"
  },
  {
    "id": 3,
    "Name": "Audi S4",
    "Year": "2018",
    "Price": 45000,
    "Power": 350,
    "Torque": 500,
    "Engine": "B9, 3 Liter Turbocharged V6",
    "ImageURL": "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/1-audi-s4-tdi-2019-rt-hero-front.jpg?itok=Mbv2Etoe"
  },
  {
    "id": 4,
    "Name": "X3 M40i",
    "Year": "2018",
    "Price": 48000,
    "Power": 355,
    "Torque": 500,
    "Engine": "B9, 3 Liter Turbocharged I6",
    "ImageURL": "https://www.netcarshow.com/BMW-X3_M40i-2018-1280-01.jpg"
  },
  {
    "id": 5,
    "Name": "BMW 330i",
    "Year": "2019",
    "Price": 38000,
    "Power": 258,
    "Torque": 400,
    "Engine": "B48, 2 Liter Turbocharged",
    "ImageURL": "https://i.redd.it/sz4mubhvaew51.jpg"
  },
  {
    "id": 6,
    "Name": "Mercedes C43 AMG, 2018",
    "Year": "2018",
    "Price": "55000",
    "Power": 385,
    "Torque": 520,
    "Engine": "3 Liter Turbocharged V6",
    "ImageURL": "https://www.cnet.com/a/img/resize/8e0918ea378cd814fc3fa79678fface4190bef5b/hub/2018/03/06/9b4170ff-4089-4fe5-838d-500a2c7b80e5/001-mercedes-amg-c43.jpg?auto=webp&fit=crop&height=675&width=1200"
  },
  {
    "Name": "BMW X3M",
    "Year": "2018",
    "Price": "78000",
    "Power": "510",
    "Torque": "650",
    "Engine": "B58, Flat six Twin Turbocharged",
    "ImageURL": "https://i.ytimg.com/vi/Uufq6MxkgJM/maxresdefault.jpg",
    "id": 7
  }
]


function App() {

  const [order,setSortOrder] = useState("default")
  const [carInfo,setcarInfo] = useState(Cars)

  function handleSelectedChange(event){
    SortData(carInfo,event.target.value)
    setSortOrder(event.target.value)
   }
  
  function SortData(carInfo,order){
    if (order === "Low to High") {
      setcarInfo(carInfo.sort((a, b) => a.Price - b.Price));
    } 
    else if (order === "High to Low") {
      setcarInfo(carInfo.sort((a, b) => b.Price - a.Price));
    } 
    else {
      setcarInfo(Cars);
    }

  }

  
  const cards = carInfo.map((carObj)=>{
    return (<CarCard key = {carObj.id} ImageURL = {carObj.ImageURL} Name = {carObj.Name} Year = {carObj.Year} Price={carObj.Price} Power = {carObj.Power} Torque = {carObj.Torque}/>
  )});
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
        <>{cards}</>
      </main>
    </div>
  )
}

export default App;
