import React from 'react';
import { RotatingLines } from "react-loader-spinner";

function Loader() {
  return (
    <div className="loader-overlay">
      <div className="loader-container">
        <RotatingLines
          strokeColor="black"
          strokeWidth={5}
          animationDuration={0.75}
          width={96}
          visible={true}
        />
      </div>
    </div>
  );
}

export default Loader;
