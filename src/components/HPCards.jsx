import React from "react";

export default function HPCards() {
  return (
    <div className="  w-[19%] rounded-[15px] p-3 mb-2 bg-white flex items-center justify-center gap-2 relative">
      <img
        alt="murakami"
        srcSet="murakami.png"
        className="rounded-[15px] w-1/3 h-[100%]"
      />
      <div className="details w-2/3 flex justify-between h-full relative">
        <div className="flex flex-col h-full gap-1 justify-between">
          <div className="flex flex-col items-start">
            <p className="text-black text-xl">Murakami</p>
            <p className="text-black font-semibold text-xl">The Godfather</p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <span className="outline outline-1 outline-black rounded-3xl px-2 py-1 flex gap-2">
              <p>5</p>
              <img alt="" srcSet="baloon.svg" />
            </span>
            <div className="flex flex-col items-start gap-6">
              <span className="outline outline-1 outline-black rounded-3xl px-2 py-1 flex gap-2">
                <p>4.0</p>
                <img alt="" srcSet="star.svg" />
                <p>(100)</p>
              </span>
              <div className="flex gap-4">
                <div className="text-2xl text-gray-400 line-through font-medium">
                  $15.0
                </div>
                <div className="text-2xl text-black">$10.50</div>
              </div>
            </div>
          </div>
        </div>
        <img srcSet="favorite.svg" alt="" className="absolute right-0" />
      </div>
    </div>
  );
}
