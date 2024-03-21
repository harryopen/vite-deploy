import React from "react";

function Cap() {
  return (
    <div className="flex justify-center items-center space-x-10 m-10 ">
      <div className="row1 flex justify-center items-center h-40 w-full bg-red-800">
        {" "}
        block 1{" "}
      </div>
      <div className="row2  flex justify-center items-center h-40 w-full bg-red-800 ">
        {" "}
        block 2{" "}
      </div>
      <div className="row3  flex justify-center items-center h-40 w-full bg-red-800">
        {" "}
        block 3{" "}
      </div>
    </div>
  );
}

export default Cap;
