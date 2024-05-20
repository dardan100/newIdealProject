import React from "react";

import CivilEngineering from "../components/CivilEngineering";
import Architecture from "../components/Architecture";
import Footer from "../components/Footer";

export default function Solution() {
  return (
    <>
      <div>
        <CivilEngineering />
        <Architecture />
      </div>

      <Footer />
    </>
  );
}
