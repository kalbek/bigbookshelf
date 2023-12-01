import Languages from "./Languages";
import ViewAllLanguages from "./ViewResetAction";
import PriceRangeSetter from "./PriceRangeSetter";

const Filter = () => (
  <>
    <div className="w-full md:w-1/4 h-auto rounded-[30px] p-6 mb-2 bg-white  flex h-fit object-contain gap-4 flex-col  ">
      <h1 className="text-black font-medium text-3xl">CATEGORIES</h1>
      <div className="flex w-full justify-between items-center relative">
        <input
          type="text"
          className="bg-zinc-200 rounded-[20px] pl-6 w-full h-[70px] py-2 px-1 text-xl flex justify-start border-0"
          placeholder="FIND CATEGORY"
        />
      </div>
      <ul className="flex flex-col items-start gap-1">
        <li className="flex gap-1 gap-2 justify-center items-center">
          <p className="text-xl font-medium text-gray-700">
            Imaginative Literature
          </p>
          <img srcSet="downblack.svg" alt="" />
        </li>
        <li className="flex gap-1 gap-2 justify-center items-center">
          <p className="text-xl font-medium text-gray-700">
            Scientific Literature
          </p>
          <img srcSet="downblack.svg" alt="" />
        </li>
        <li className="flex gap-1 gap-2 justify-center items-center">
          <p className="text-xl font-medium text-gray-700"> Business</p>
          <img srcSet="downblack.svg" alt="" />
        </li>
        <li className="flex gap-1 gap-2 justify-center items-center">
          <p className="text-xl font-medium text-gray-700"> Educational</p>
          <img srcSet="downblack.svg" alt="" />
        </li>
        <li className="flex gap-1 gap-2 justify-center items-center">
          <p className="text-xl font-medium text-gray-700"> Other</p>
          <img srcSet="downblack.svg" alt="" />
        </li>
      </ul>
      {/* filter for publish date */}
      <h1 className="text-black font-medium text-3xl mt-10">PUBLISH DATE</h1>
      <div className="flex w-full justify-between items-center relative">
        <select
          type="text"
          className="bg-inherit rounded-[20px] text-xl w-full h-[70px] py-2 px-1 flex outline outline-1 text-zinc-600 font-medium justify-start border-0"
        >
          <option value="" className="bg-zinc-200 ">
            ALL YEARS
          </option>
          <option value="" className="bg-zinc-200 ">
            2021
          </option>
          <option value="" className="bg-zinc-200 ">
            2022
          </option>
          <option value="" className="bg-zinc-200 ">
            2023
          </option>
        </select>
      </div>
      {/* filter by language */}
      <h1 className="text-black font-medium text-3xl mt-10">LANGUAGE</h1>
      <Languages />
      <ViewAllLanguages
        actionName="VIEW ALL"
        onClick={() => console.log("displaying all languages.")}
      />
      {/* filter by price range */}
      <h1 className="text-black font-medium text-3xl mt-10">PRICE</h1>
      <PriceRangeSetter />
    </div>
  </>
);

export default Filter;
