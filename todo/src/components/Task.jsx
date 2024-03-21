import React, { useEffect } from "react";
import Button from "./Button";
import { useState } from "react";

function Task() {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const result = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
  };
  return (
    <div className=" mt-5 flex justify-center">
      <input
        className=" bg-slate-100 w-[500px] py-5 rounded-lg px-2 placeholder:text-center"
        type="text"
        placeholder="Task"
        onChange={itemEvent}
      ></input>

      <button onClick={result}>see list</button>

      <ol>
        {Items.map((itemval) => {
          return <li>{itemval}</li>;
        })}
      </ol>
    </div>
  );
}

export default Task;
