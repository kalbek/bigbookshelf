export default function Hero() {
  return (
    <div className="w-[90%] h-[80vh] grid grid-cols-2 mx-auto">
      <div className="text-[630%] leading-[6rem] tracking-auto font-semibold col-span-2 text-black h-fit mt-8  ">
        READING MAKES THE WORLD HUGE
      </div>
      <div className="   rounded-3xl bg-black relative ">
        <div className="flex flex-col items-start  gap-8 p-8 mx-auto   ">
          <h1 className="text-5xl text-white w-1/2 outline ">FIND SOMETHING TO READ</h1>
          <p className="text-2xl font-light lg:w-3/5 w-full text-white outline  ">
            Fancy something unusual and unpredictable? Funny or exciting? No
            problem. Check out the collections we have prepared for you.
          </p>
          <button
            type="submit"
            className=" px-10 py-6 rounded-3xl outline outline-crayola text-crayola text-lg font-medium "
          >
            BROWSE NOW
          </button>
        </div>
      </div>
    </div>
  );
}
