import HPCards from "./HPCards";

export default function Bestsellers() {
  return (
    <div className="bg-blackbg w-full my-4 h-auto px-10">
      <h1 className="text-white font-medium text-2xl py-10">BESTSELLERS</h1>
      <div className="flex flex-col  gap-2 flex-wrap md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <HPCards />
        <HPCards />
        <HPCards />
        <HPCards />
        <HPCards />
        <HPCards />
        <HPCards />
        <HPCards />
        <HPCards />
        <HPCards />
      </div>
    </div>
  );
}
