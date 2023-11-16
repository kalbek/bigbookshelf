import { Link } from "react-router-dom";

const Navigation = () => (
  <>
    <header className="w-full mx-auto bg-blackbg pt-6 pb-4 w-[95%] rounded-2xl mt-4 px-6">
      <div className="container mx-auto gap-4 flex-spaced-start  ">
        <img
          src="logo.svg"
          alt="logo"
          className="lg:scale-[120%] md:scale-[100%]"
        />
        <nav>
          <ul className="hidden lg:mt-2 lg:flex md:grid md:grid-cols-3 lg:gap-[1.5vw] md:gap-1 text-white   text-[1.4rem] font-light">
            <li className="">Books</li>
            <li className="">Authors</li>
            <li className="">What&nbsp;to&nbsp;Read?</li>
            <li className="">Gift&nbsp;Ideas</li>
            <li className="">About&nbsp;Us</li>
          </ul>
        </nav>
        {/* icons and login */}
        <div className="right  flex flex-col lg:flex-row md:flex-col gap-2  lg:gap-12   z-50">
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
            className="w-20 h-8 rounded-lg bg-crayola flex-centered px-16 py-6 hover:scale-[105%]"
          >
            <a href="./users" className="text-black font-medium text-lg ">
              {" "}
              Login
            </a>
          </button>
        </div>
      </div>
    </header>
  </>
);

export default Navigation;
