import { useState } from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, } from 'react-icons/ai'
import { BsFillCartFill, BsPerson } from 'react-icons/bs'
import { TbTruckReturn, TbHelp } from 'react-icons/tb'
import { FaGoogleWallet} from 'react-icons/fa'
import { MdFavorite } from "react-icons/md";


const TopNav = () => {

    const [ sideNav, setSideNav ] = useState(false)
    console.log(sideNav);
  return (
    <div className="max-w-[1520px] mx-auto flex justify-between items-center p-5 sticky z-40 top-0 bg-white">

        {/* **********Titles******* */}
        <div className="flex items-center gap-2">
            <div onClick={() => setSideNav(!sideNav)} className="cursor-pointer">
                <AiOutlineMenu size={25}/>
            </div>
            <h1 className='text-2xl sm:text-2xl lg:text-3xl px-2'>Dio 
                <span className='font-bold text-orange-700'>Eats</span>
            </h1>
            <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[13px]">
                <p className='bg-orange-700 text-white rounded-full p-1 text-bold'>Free</p>
                <p className='p-2 text-bold'>Delivery</p>
            </div>
        </div>

        {/* ************Search bar input******** */}
        <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
            <AiOutlineSearch size={23}/>
            <input type="text" 
            placeholder='search a meal'
            className='bg-transparent p-2 w-full focus:outline-none' />
        </div>

        {/* ***********Cart Item*********** */}
        <button className="bg-orange-700 text-white py-2 hidden md:flex items-center rounded-full border-none">
            <BsFillCartFill size={20} className='mr-[5px]'/> Cart
        </button>


        {/* ***************HAMBERGER MENU*********** */}

        {/* Overlay background */}
        {sideNav? (
            <div 
                onClick={() => setSideNav(!sideNav)} 
                className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0"></div>
        ): (
            ""
        )}

        {/* side bar */}
        <div className={
            sideNav ? "fixed top-0 left-0 w-[250px] h-screen bg-white z-10 duration-300" 
                    : "fixed top-0 left-[-100%] w-[250px] h-screen bg-white z-10 duration-300" 
            }>

        <AiOutlineClose 
        className='absolute right-4 top-4 cursor-pointer '
            onClick={() => setSideNav(!sideNav)}
            size={25}
        />
        <h2 className='text-2xl p-4'>Dio
            <span className='text-orange-700 font-bold'>Eats</span>
        </h2>

        <nav>
            <ul className="flex flex-col p-4 text-gray-900">
                <li className='text-xl py-4 flex'>
                    <BsPerson 
                        className='mr-4 text-white bg-black rounded-full'
                        size={25}/>
                    My Account
                </li>
                <li className='text-xl py-4 flex'>
                    <TbTruckReturn 
                        className='mr-4 text-white bg-black rounded-full'
                        size={25}/>
                    Delivery
                </li>
                <li className='text-xl py-4 flex'>
                    <MdFavorite 
                        className='mr-4 text-white bg-black rounded-full'
                        size={25}/>
                    My Favorite
                </li>
                <li className='text-xl py-4 flex'>
                    <FaGoogleWallet 
                        className='mr-4 text-white bg-black rounded-full'
                        size={25}/>
                    My Wallet
                </li>
                <li className='text-xl py-4 flex'>
                    <TbHelp 
                        className='mr-4 text-white bg-black rounded-full'
                        size={25}/>
                    Help
                </li>
            </ul>
        </nav>

        </div>
    </div>
  )
}

export default TopNav
