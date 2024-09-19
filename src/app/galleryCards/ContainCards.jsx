"use client";
import React, {useState, useEffect} from 'react'
import CardProduct from './CardProduct';


const ContainCards = () => {

    const [dataCoffee, setDataCoffee] = useState([]);

    const fetchCoffeeData = async () => {
        try {
          const response = await fetch(
            "https://cafe-de-altura-lovat.vercel.app/api/products"
          );
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setDataCoffee(data.products);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
    
      useEffect(() => {
        fetchCoffeeData();
      }, []);

      console.log(dataCoffee);
      
  return (
    <section
    className={`p-10 flex flex-col justify-center items-center`}
  >
    <h2 className="text-2xl font-medium text-[#2A5B45] leading-7 mb-5">Últimos orígenes</h2>
    <div className={`flex flex-wrap w-[1200px] gap-6`}>
      {location === "home"
        ? dataCoffee.slice(0, 4).map((card, i) => {
            return <CardProduct key={i} data={card} />;
          })
        : dataCoffee.map((card, i) => {
            return <CardProduct key={i} data={card} />;
          })}
    </div>
  </section>
  )
}

export default ContainCards
