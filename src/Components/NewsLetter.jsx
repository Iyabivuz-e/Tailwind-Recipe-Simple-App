const NewsLetter = () => {
  return (
    <div className="max-w[1520px] m-auto text-white bg-[#24262b] py-4 px-6">
      <div className="mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1>Need advice on how to improve your flow?</h1>
          <p>Sign up to join our Newspaper!</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col md:flex-row items-center justify-between w-full">
            <input
              type="email"
              name=""
              placeholder="Email"
              className="p-2 rounded-md w-full text-black outline-none"
            />

            <button className="bg-[#00df9a] text-white rounded-md font-medium w-[200px] mx-2 my-2 py-2">
              Notify me
            </button>
          </div>
          <p>
            We are concerned about your data, read
            <span className="text-[#00df9a] cursor-pointer mx-1">
              Privacy Policy
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
