import { useState } from "react";
import { mealData } from "../data/data"
import { FaArrowRightLong } from "react-icons/fa6";

const Meal = () => {

    const [ originalMealData ] = useState(mealData)
    const [ myMeal, setMyMeal ] = useState(mealData)

    // Filter the pizza
    const filterCategory = (category) => {
        if(category === "all"){
            setMyMeal(originalMealData)
            console.log("All data is shown");
        }else{
            const filteredMeal = originalMealData.filter((item) => {
                return item.category === category
            })
            setMyMeal(filteredMeal)
        }
    }

  return (
    <div className='max-w-[1520px] m-auto px-4 py-12'>
      <h1 className="text-orange-500 text-center py-2 font-bold text-2xl">Meal</h1>

        {/* Filtering */}
        <div className="flex flex-col lg:flex-row justify-center py-3">
            <div className="flex justify-center md:justify-center gap-3  ">
                <button 
                    onClick={() => filterCategory("all")}
                    className="bg-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-black duration-300">All</button>
                <button 
                    onClick={() => filterCategory("pizza")}
                    className="bg-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-black duration-300">Pizza</button>
                <button 
                    onClick={() => filterCategory("chicken")}
                    className="bg-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-black duration-300">Chicken</button>
                <button 
                    onClick={() => filterCategory("salad")}
                    className="bg-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-black duration-300">Salad</button>
            </div>
        </div>

        <div className="grid justify-center md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 py-4">
            {myMeal.map((meal) => (
                <div key={meal.id} className="border-none hover:scale-105 duration-300 ">
                    <img 
                    className="w-full h-[210px] object-cover rounded-lg"
                    src={meal.image} alt={meal.name} />

                    <div className="flex justify-between py-2 px-4">
                        <p className="font-bold">{meal.name}</p>
                        <p className="bg-orange-700 h-16 w-16 border-8 text-white flex -mt-10 justify-center items-center py-4 px-2 rounded-full">{meal.price}</p>
                    </div>
                    <div className="  pl-4 py-4 -mt-4 ">
                        <button className="flex items-center gap-2 text-white bg-orange-700 border-0">
                            View More
                            <FaArrowRightLong />
                        </button>
                    </div>
                </div>
                
            ))}
        </div>
    </div>
  )
}

export default Meal
