import Discounts from "./Discounts";
import BestGiftBooks from "./BestGiftBooks";

const DiscountsAndGifts = () => (
  <>
    <div className="flex p-8 gap-4 w-full h-[50%]">
      <Discounts />
      <BestGiftBooks />
    </div>
  </>
);

export default DiscountsAndGifts;
