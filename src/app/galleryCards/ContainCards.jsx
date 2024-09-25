"use client";
import React from "react";
import CardProduct from "./CardProduct";
import { useQuery } from "@tanstack/react-query";

const ContainCards = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://cafe-de-altura-lovat.vercel.app/api/products").then(
        (res) => res.json()
      ),
  });

  if (isPending) {
    return (
      <div className="flex flex-wrap w-[1200px] gap-6">
        {[...new Array(8)].map((_, index) => {
          return (
            <div
              key={index}
              className=" animate-pulse w-[282px] h-[391.39px] border flex flex-col items-center justify-center rounded-lg border-solid border-[#E3DED7]"
            >
              <div className="w-56 h-56 bg-gray-200 rounded-full"></div>
              <div className="flex flex-col justify-center items-center gap-3 mt-4">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
              <div className="mt-4 h-9 bg-gray-200 rounded"></div>
            </div>
          );
        })}
      </div>
    );
  }

  if (error) return "An error has occurred: " + error.message;

  // const [dataCoffee, setDataCoffee] = useState([]);

  // const fetchCoffeeData = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://cafe-de-altura-lovat.vercel.app/api/products"
  //     );
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }
  //     const data = await response.json();
  //     setDataCoffee(data.products);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchCoffeeData();
  // }, []);

  // console.log(dataCoffee);

  return (
    <section className={`p-10 flex flex-col justify-center items-center`}>
      <h2 className="text-2xl font-medium text-[#2A5B45] leading-7 mb-5">
        Últimos orígenes
      </h2>
      <div className={`flex flex-wrap w-[1200px] gap-6`}>
        {data.products.map((card, i) => {
          return <CardProduct key={i} data={card} />;
        })}
      </div>
    </section>
  );
};

export default ContainCards;
