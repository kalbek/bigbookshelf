import { Link } from "react-router-dom";

const Navigation = () => (
  <>
    <header className="w-full bg-blackbg py-8">
      <div className="container mx-auto gap-4 flex-spaced">
        <img
          src="logo.svg"
          alt="logo"
          className="lg:scale-[120%] md:scale-[100%]"
        />
        <nav>
          <ul className="hidden md:flex gap-[1.5vw]  text-white   text-xl font-light">
            <li className="">Books</li>
            <li className="">Authors</li>
            <li className="">What&nbsp;to&nbsp;Read?</li>
            <li className="">Gift&nbsp;Ideas</li>
            <li className="">About&nbsp;Us</li>
          </ul>
        </nav>
        {/* icons and login */}
        <div className="right flex  gap-16 outline  z-50">
          {/* icon sets */}
          <ul className="flex items-start flex-centered gap-[1vw]  ">
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
