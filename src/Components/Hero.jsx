import photo1 from '../assets/slide/one.jpg'
import photo2 from '../assets/slide/two.jpg'
import photo3 from '../assets/slide/three.jpg'
import { useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { GoDot } from "react-icons/go";


const Hero = () => {

    const sliders = [
        {
            url: photo1
        },
        {
            url: photo2
        },
        {
            url: photo3
        }
    ]

    // Slide functionality
    const [ currentIndex, setCurrentIndex ] = useState(0)

    const prevSlide = () => {
        const isFirstIndex = currentIndex === 0
        const newIndex = isFirstIndex ? sliders.length-1 : currentIndex -1
        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const isLastIndex = currentIndex === sliders.length-1
        const newIndex = isLastIndex ? 0: currentIndex + 1
        setCurrentIndex(newIndex)
    }

    // ***********Pagination********
    const moveToNext = (nextIndex) => {
        setCurrentIndex(nextIndex)
    }

  return (
    <div className='max-w-[1520px] h-[400px] w-full p-y4 px-4 relative '>
      <div className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        style={{backgroundImage: `url(${sliders[currentIndex].url})`}}
      ></div>
      <div className="absolute top-[40%] -translate-x-0 -translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer">
        <IoIosArrowBack onClick={prevSlide}/>
      </div>
      <div className="absolute top-[40%] -translate-x-0 -translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer">
        <IoIosArrowForward onClick={nextSlide}/>
      </div>

      <div className="flex top-4 justify-center py-2">
            {
                sliders.map((slide, slideIndex) => (
                    <div 
                        onClick={() => moveToNext(slideIndex)}
                        key={slideIndex}
                        className="text-2xl cursor-pointer">
                        <GoDot/>
                    </div>
                ))
            }
      </div>
    </div>
  )
}

export default Hero
