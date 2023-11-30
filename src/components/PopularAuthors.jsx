import PopularAuthorCards from "./PopularAuthorCards";
import SeeAllPopularAuthors from "./SeeAllPopularAuthors";

const PopularAuthors = () => (
  <>
    <div className="w-full bg-blackbg p-8 flex flex-col">
      <h1 className="text-3xl text-white mb-6">POPULAR AUTHORS</h1>
      <div className="flex gap-3   flex-wrap">
        {[...Array(20)].map(() => (
          <PopularAuthorCards key={0} />
        ))}
        <SeeAllPopularAuthors />
      </div>
    </div>
  </>
);

export default PopularAuthors;
