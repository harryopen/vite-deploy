import React from "react";

function Card(props) {
  return (
    <div className="flex flex-col justify-center item-center text-2xl w-auto h-auto border gap-10">
      <h1>user_id: {props.uid}</h1>
      <h2>id:{props.id}</h2>
      <h3>body:{props.body}</h3>
    </div>
  );
}

export default Card;
