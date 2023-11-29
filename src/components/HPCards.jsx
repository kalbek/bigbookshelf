import React from "react";

export default function HPCards() {
  return (
    <div className="rounded-[15px] p-3 mb-2  w-full bg-white w-fit bg-red-400 flex h-fit object-contain gap-2 flex-col md:flex-row relative">
      <img
        alt="murakami"
        srcSet="murakami.png"
        className="rounded-[15px] w-full md:w-2/5  "
      />
      <div className="flex justify-between  ">
        <div className="flex flex-col h-full gap-10 justify-between">
          <div className="flex flex-col items-start">
            <p className="text-gray-800 text-3xl md:text-lg font-medium">
              Murakami
            </p>
            <p className="text-gray-600 text-3xl md:text-lg font-semibold ">
              After Dark
            </p>
          </div>
          <div className="flex flex-col w-fit gap-2 text-3xl md:text-lg">
            <span className="outline outline-1 w-fit outline-black rounded-3xl px-3 py-1 flex gap-2">
              <p>5</p>
              <img alt="" srcSet="baloon.svg" />
            </span>
            <span className="outline outline-1 w-fit outline-black rounded-3xl px-3 py-2 flex gap-2">
              <p>4.0</p>
              <img alt="" srcSet="star.svg" />
              <p>(100)</p>
            </span>
          </div>
          <div className="flex gap-4 flex-wrap text-4xl md:text-2xl">
            <div className=" text-gray-300 line-through font-medium">$15.0</div>
            <div className="  text-black">
              <p className="tracking-tight">$10.50</p>
            </div>
          </div>
        </div>
        <span>
          <img
            srcSet="favorite.svg"
            alt=""
            className="md:top-4  mt-2 md:mt-0 right-4 absolute scale-[120%] cursor-pointer"
          />
        </span>
      </div>
    </div>
  );
}
