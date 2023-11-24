export default function Hero() {
  return (
    <>
      <div className="px-8  mx-auto">
        <div className="text-[630%] leading-[6rem] tracking-auto font-semibold col-span-2 text-black h-fit mt-8">
          READING MAKES THE WORLD HUGE
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-4 h-[60vh] mt-12">
          <div className=" flex flex-col justify-between  rounded-3xl bg-black  p-8 ">
            <div className="flex flex-col gap-12">
              <h1 className="text-5xl text-white w-1/2">
                FIND SOMETHING TO READ
              </h1>
              <p className="text-2xl font-light lg:w-3/5 w-full text-white">
                Fancy something unusual and unpredictable? Funny or exciting? No
                problem. Check out the collections we have prepared for you.
              </p>
            </div>
            <button
              type="submit"
              className=" px-10 py-6 rounded-3xl outline outline-crayola items-end text-crayola md:w-1/3 mt-4 text-lg font-medium "
            >
              BROWSE NOW
            </button>
          </div>
          <div className="flex flex-col md:overflow-hidden justify-between rounded-3xl bg-black  ">
            <img
              alt="Book of the day"
              srcSet="bookoftheday.png"
              className="object-cover  w-full h-full   "
            />
          </div>
        </div>
      </div>
    </>
  );
}
