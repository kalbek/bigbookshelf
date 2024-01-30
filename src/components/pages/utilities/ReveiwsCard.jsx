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
      <div className="relative bg-white padding-4 flex flex-col items-start gap-2 p-6 rounded-2xl w-auto">
        <div className="flex justify-between">
          <div className="flex gap-1">
            <img src={blob} alt="book" className="w-[100%] " />
            <p className="text-xl">{reviewerName}</p>
          </div>
          <p className="text-xl">{date}</p>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-1"></div>
          &nbsp;
        </div>
        
        <div className="text-philippinegray text-xl">
          <p>{author}</p>
        </div>
        <div className="text-xl text-verydarkgray">
          <p>{title}</p>
        </div>
      </div>
    </>
  );
}
