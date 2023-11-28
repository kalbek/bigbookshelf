import React from "react";
import Hero from "../../Hero";
import Bestsellers from "../../Bestsellers";

export default function Home() {
  return (
    <div className=" flex flex-col justify-center items-center">
      <Hero />
      <Bestsellers />
    </div>
  );
}
