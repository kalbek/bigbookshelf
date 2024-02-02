import React from "react";

export default function ReviewsCard({
  reviewerName,
  blob,
  date,
  reveiwRating,
  review,
}) {
  return (
    <>
      <div className="h-full relative bg-white padding-4 flex flex-col items-start gap-2 p-6 rounded-2xl w-auto">
        <div className="w-full  flex justify-between">
          <div className="flex justify-between gap-1">
            <img srcSet={blob} alt="book img" className="w-[100%]" />
            <p className="text-xl whitespace-nowrap">{reviewerName}</p>
          </div>
          <p className="text-xl">{date}</p>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-1">
            <img srcSet="staradust.svg" alt="" />
            <p className="text-xl">{reveiwRating}</p>
          </div>
          &nbsp;
        </div>
        <div className="w-full outline ouline-2">
          <p className="text-lg">{review}</p>
        </div>
      </div>
    </>
  );
}
