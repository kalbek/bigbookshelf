import { Link } from "react-router-dom";

const Navigation = () => (
  <>
    <header className="w-full bg-blackbg py-8">
      <div className="container mx-auto w-10/12  flex-spaced">
        <img src="logo.svg" alt="logo" className="scale-[120%]" />
        <nav>
          <ul className="flex text-white   gap-10 text-xl font-normal">
            <li className="">Books</li>
            <li className="">Authors</li>
            <li className="">What to Read?</li>
            <li className="">Gift Ideas</li>
            <li className="">About Us</li>
          </ul>
        </nav>
        <div className="right flex justify-between gap-12">
          {/* icon sets */}
          <ul className="flex items-start flex-centered gap-8 scale-[110%]">
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
