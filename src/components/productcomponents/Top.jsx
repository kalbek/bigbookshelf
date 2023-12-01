const Top = () => (
  <div className="w-full flex flex-col md:flex-row justify-between px-2 md:px-8 py-4 bg-blackbg items-start">
    {/* top filter results and tags */}
    <div className="flex justify-between w-full ">
      <div className="flex gap-10">
        <div className="flex flex-col md:flex-row gap-2">
          <p className="text-white">FILTER</p>
          <p className="text-gray-600">120 results</p>
        </div>
        {/* tags container */}
        <div className="grid grid-cols-2 md:flex gap-2 justify-start flex-wrap">
          {/* the tags */}
          <div className="rounded-[25px] bg-black p-2 text-start">
            <p className="text-gray-300">Reset&nbsp;all</p>
          </div>
          <div className="rounded-[25px] bg-gray-700 p-2 flex justify-between gap-2">
            <p className="text-gray-200">English</p>
            <img srcSet="clearbtn.svg" alt="clear button" />
          </div>
          <div className="rounded-[25px] bg-gray-700 p-2 flex justify-between gap-2">
            <p className="text-gray-200">Hardcover</p>
            <img srcSet="clearbtn.svg" alt="clear button" />
          </div>
          <div className="rounded-[25px] bg-gray-700 p-2 flex justify-between gap-2">
            <p className="text-gray-200">Rib&nbsp;Knits</p>
            <img srcSet="clearbtn.svg" alt="clear button" />
          </div>
        </div>
      </div>
    </div>
    {/* featured filters */}
    <div className="flex p-2 mt-4 md:mt-0 w-full justify-between outline outline-white rounded-[15px] md:w-[20%] cursor-pointer">
      <p className="text-white">FEATURED</p>
      <img alt="down icon" srcSet="down.svg" />
    </div>
  </div>
);

export default Top;
