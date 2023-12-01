import React from "react";

const Filter = () => (
  <>
    <div className="w-1/4  h-screen rounded-[40px] p-6 mb-2 w-full bg-white w-full flex h-fit object-contain gap-4 flex-col  ">
      <h1 className="text-gray-800 font-medium text-3xl">CATEGORIES</h1>
      <div className="flex w-full justify-between items-center relative">
        <input
          type="text"
          className="bg-zinc-200 rounded-[10px] w-full h-[70px] py-2 px-1 text-xl flex justify-start border-0"
          placeholder="  FIND CATEGORY"
        />
      </div>
      <ul className="flex flex-col items-start gap-1">
        <li className="flex gap-1">
          <p className="text-xl font-medium text-gray-700">
            {" "}
            Imaginative Literature
          </p>
          <img srcSet="downblack.svg" alt="" />
        </li>
        <li className="flex gap-1">
          <p className="text-xl font-medium text-gray-700">
            {" "}
            Scientific Literature
          </p>
          <img srcSet="downblack.svg" alt="" />
        </li>
        <li className="flex gap-1">
          <p className="text-xl font-medium text-gray-700"> Business</p>
          <img srcSet="downblack.svg" alt="" />
        </li>
        <li className="flex gap-1">
          <p className="text-xl font-medium text-gray-700"> Educational</p>
          <img srcSet="downblack.svg" alt="" />
        </li>
        <li className="flex gap-1">
          <p className="text-xl font-medium text-gray-700"> Other</p>
          <img srcSet="downblack.svg" alt="" />
        </li>
      </ul>
      <h1 className="text-gray-800 font-medium text-3xl">PUBLISH DATE</h1>
      <div className="flex w-full justify-between items-center relative">
        <input
          type="text"
          className="bg-white rounded-[10px] w-full h-[50px] py-2 px-1 text-gray-900 flex outline outline-1 justify-start border-0"
          placeholder="  FIND CATEGORY"
        />
        <img
          srcSet="downblack.svg"
          alt="down arrow"
          className="absolute right-4 top-5"
        />
      </div>
    </div>
  </>
);

export default Filter;
