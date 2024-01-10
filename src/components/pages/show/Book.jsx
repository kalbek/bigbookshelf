import React from "react";
import Preview from "./Preview";

const Book = () => (
  <div className="flex justify-center">
    <div className="m-4 rounded-3xl w-full  h-[65vh] bg-blackbg p-4 p-8  text-white text-lg">
      {/* Filter menu section */}
      <ul className="flex gap-2">
        <li className=" text-lotion  text-xl">
          <a href="/">Home</a>
        </li>
        <li>|</li>
        <li className=" text-xl">
          <a href="/books"> Books</a>
        </li>
        <li>|</li>
        <li className=" text-xl">All&nbsp;books</li>
        <li>|</li>
        <br />
        <li className="text-philippinegray text-xl">Muscle, Alan Trotter</li>
      </ul>
      {/* book preview */}
      <Preview />
    </div>
  </div>
);

export default Book;
