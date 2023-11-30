import React from "react";

const BestGiftBooks = () => (
  <>
    <div className="flex justify-center items-center relative bg-blackbg rounded-[15px] w-2/3">
      <div className="absolute left-[17%] scale-110 top-10">
        <img srcSet="bigstar.svg" alt="" />
      </div>
      <div className="absolute left-[17%] scale-110 bottom-10">
        <img srcSet="smallstar.svg" alt="" />
      </div>
      <p className="text-white text-4xl font-medium">THE BEST BOOKS FOR A GIFT</p>
    </div>
  </>
);

export default BestGiftBooks;
