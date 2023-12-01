const Navigation = () => (
  <>
    <header className="w-[97vw] mx-auto bg-blackbg pt-6 pb-4 items-center w-full rounded-2xl mt-8 px-6 overflow-hidden">
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
              {" "}
            </li>
            <li className="">Authors</li>
            <li className="">What&nbsp;to&nbsp;Read?</li>
            <li className="">Gift&nbsp;Ideas</li>
            <li className="">About&nbsp;Us</li>
          </ul>
        </nav>
        {/* icons and login */}
        <div className="hidden md:flex flex-col lg:flex-row md:flex-col gap-2  lg:gap-12  z-50">
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
