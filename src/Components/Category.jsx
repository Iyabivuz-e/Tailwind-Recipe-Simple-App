import { categories } from "../data/data"

const Category = () => {
    console.log(categories)
  return (
    <div className="max-w[1520px] m-auto px-4 py-4">
      <h1 className="text-orange-500 text-center py-2 font-bold text-2xl">Trending Categories</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 px-2 py-2">
        {categories.map((item) => {
            return <div key={item.id} className="p-4 flex justify-center items-center hover:scale-105 duration-300">
                <img src={item.image} alt={item.name} />
            </div>
        })}
      </div>
    </div>
  )
}

export default Category
