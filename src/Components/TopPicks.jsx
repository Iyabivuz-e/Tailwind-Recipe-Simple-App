import { topPicks } from '../data/data'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


const TopPicks = () => {

  return (
    <>
      <h1 className="text-orange-500 text-center py-2 font-bold text-2xl">Top Picks</h1>
      <div className="hidden lg:flex max-w[1520px] m-auto py-2 px-2">
        <Splide options={{perPage: 3, gap:"15px", drag:"free" }}>
          {topPicks.map((item) => (
            <SplideSlide key={item.id}>
              <div className="rounded-3 relative">
                <div className="absolute w-full h-full rounded-3xl bg-black/50 text-white">
                  <p className="px-3 pt-4 font-bold text-2xl">{item.title}</p>
                  <p className="px-3">{item.price}</p>
                  <button className="border-solid border-white text-white bg-transparent mx-2 bottom-4 absolute">
                    Add To Cart
                    </button>
                </div>
                <img src={item.img} 
                className="h-[200px] w-full object-cover rounded-3xl cursor-pointer hover:scale-105 ease-out duration-300" />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  )
}

export default TopPicks
