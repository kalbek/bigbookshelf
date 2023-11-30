import React from "react";
import Hero from "../../Hero";
import Bestsellers from "../../Bestsellers";
import WhatToRead from "../../WhatToRead";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Hero />
      <Bestsellers />
      <WhatToRead />
    </div>
  );
}
