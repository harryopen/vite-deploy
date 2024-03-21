import React from "react";
function Card1(props) {
  console.log(props);
  return (
    <>
      {/* <div className="flex flex-col justify-center item-center text-2xl w-auto h-auto border">
        <h1>Email:{props.data.email}</h1>
        <h3>
          First-Name: {props.data.name.title} {props.data.name.first}
        </h3>
        <img
          className="h-32 w-20  object-cover mt-2 rounded-full"
          src={props.data.picture.thumbnail}
        ></img>
      </div> */}

<div className="container mx-auto px-4 h-[150px] md:w-1/2 lg:w-1/3 xl:w-1/4">
  <div className="bg-white rounded-lg shadow-md p-4">
    <img src={props.data.picture.thumbnail} alt="Profile" className="w-16 h-16 rounded-full mx-auto mb-4" />
    <h1 className="text-lg font-semibold text-center">
      {props.data.name.title} {props.data.name.first}
    </h1>
    <p className="text-sm text-gray-600 text-center">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nulla cum tempore consequuntur
    </p>
  </div>
</div>

    </>
  );
}
export default Card1;
