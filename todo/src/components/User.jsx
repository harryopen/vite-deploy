import react from "react";
import { Provider } from "../Context/Counter";
export const User = () => {
  return (
    <>
      <div className="flex justify-center item-center gap-5 ">
        <button className="border p-2"> increment</button>
        <button className="border p-2">decrement</button>
      </div>
    </>
  );
};
