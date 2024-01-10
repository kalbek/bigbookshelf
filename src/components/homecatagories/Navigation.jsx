const Navigation = () => (
  <>
    <header className="w-[97vw] mx-auto bg-blackbg pt-6 pb-4 items-center w-full rounded-2xl mt-8 px-6 overflow-hidden">
      <div className="absolute w-full h-[100vh] left-0 top-0 z-50 bg-[#F4F4F4] p-6">
        <div className="relative rounded w-full h-full bg-blackbg outline-black outline-2">
          <div className="absolute top-1 right-1 scale-[0.3] ">
            <img src="close-icon.svg" alt="close icon" />
          </div>
          <div className="absolute bottom-20 left-[20%]">
            <img src="logo.svg" alt="logo" className="scale-[100%]" />
          </div>
          <ul className="absolute text-[#F4F4F4] text-xl top-[20%] left-[20%] mb-8">
            <li className="mb-6 cursor-pointer hover:text-black">Books</li>
            <li className="mb-6 cursor-pointer hover:text-black">Authors</li>
            <li className="mb-6 cursor-pointer hover:text-black">What&nbsp;to&nbsp;Read?</li>
            <li className="mb-6 cursor-pointer hover:text-black">Gift&nbsp;Ideas</li>
            <li className="mb-6 cursor-pointer hover:text-black">About&nbsp;Us</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto gap-4 flex-spaced-start">
        <img
          src="logo.svg"
          alt="logo"
          className="lg:scale-[120%] md:scale-[100%]"
        />
        <nav>
          <ul className="hidden lg:mt-2 lg:flex md:grid md:grid-cols-3 lg:gap-[1.5vw] md:gap-1 text-white   text-[1.4rem] font-light">
            <li className="">
              <a href="./products">Books</a>
            </li>
            <li className="">Authors</li>
            <li className="">What&nbsp;to&nbsp;Read?</li>
            <li className="">Gift&nbsp;Ideas</li>
            <li className="">About&nbsp;Us</li>
          </ul>
        </nav>
        {/* icons and login */}
        <div className="hidden md:flex flex-col lg:flex-row md:flex-col gap-2  lg:gap-12  z-40">
          {/* icon sets */}
          <ul className="flex items-start flex-centered gap-8 ">
            <li>
              <img src="search.svg" alt="search icon" />
            </li>
            <li>
              <img src="favorites.svg" alt="favorites icon" />
            </li>
            <li>
              <img src="cart.svg" alt="cart icon" />
            </li>
          </ul>
          {/* login/user section */}
          <button
            type="submit"
            className="  h-8 rounded-2xl bg-crayola flex-centered px-8 py-7 hover:scale-[105%]"
          >
            <a href="./users" className="text-black font-medium text-lg">
              LOGIN
            </a>
          </button>
        </div>
        {/* mobile menu */}
        <div className="mobile-menu md:hidden mt-2">
          <img srcSet="mobile-menu.svg" alt="mobile menu" />
        </div>
      </div>
    </header>
  </>
);

export default Navigation;
