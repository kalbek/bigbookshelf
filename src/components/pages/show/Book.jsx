import React from "react";
import Preview from "./Preview";
import PlotSummary from "./PlotSummary";

const Book = () => (
  <div className="flex justify-center">
    <div className="m-4 rounded-3xl h-auto bg-blackbg p-4 p-8 text-white text-lg flex flex-col w-full">
      {/* Filter menu section */}
      <ul className="flex gap-2">
        <li className=" text-lotion text-xl">
          <a href="/">Home</a>
        </li>
        <li>|</li>
        <li className=" text-xl">
          <a href="/books"> Boo ks</a>
        </li>
        <li>|</li>
        <li className=" text-xl">All&nbsp;books</li>
        <li>|</li>
        <br />
        <li className="text-philippinegray text-xl">Muscle, Alan Trotter</li>
      </ul>
      {/* book preview */}
      <div className="flex  justify-between w-[100%]">
        <Preview />
        {/* <Preview /> */}
        <PlotSummary />
        {/* <PlotSummary /> */}
      </div>
    </div>
  </div>
);

export default Book;
