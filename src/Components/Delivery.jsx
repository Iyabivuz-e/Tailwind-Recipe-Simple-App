import deliveryPhoto from '../assets/delivery/delivery2.jpg'

const Delivery = () => {
  return (
    <div className="w-full bg-white px-4 py-16">
      <h3 className="text-orange-500 font-bold text-2xl text-center">Fast Delivery App</h3>
      <div className="w-[1520] mx-auto my-4 grid md:grid-cols-2 gap-4">
        <img src={deliveryPhoto} alt="" className="mx-auto my-4 w-[550px]" />
        <div className="flex flex-col justify-center">
            <p className="text-[#00df9a] font-bold">Get the App</p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Limitless Convenience on demand</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Possimus ullam beatae accusantium, molestias aliquid aliquam voluptatibus nostrum. 
                Iusto pariatur perferendis itaque. Natus, ipsum necessitatibus consectetur 
                tempora maxime voluptatem, dicta perferendis labore sit illo libero eius sequi 
                ducimus porro aut, iste culpa ad assumenda odit quaerat? Impedit fuga molestiae molestias veniam?
            </p>
            <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'
            >Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Delivery
