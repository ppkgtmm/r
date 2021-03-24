import React from "react";

export default function BackgroundCard(props) {
  return (
    <div className="capitalize sm:w-9/12 md:w-full lg:max-w-md xl:w-9/12 max-w-lg m-auto font-light rounded-lg bg-blue mt-20 p-8 px-14 main">
      <div className="mx-auto">
        <h1 className="text-2xl xl:text-3xl overflow-ellipsis overflow-hidden uppercase text-gray-700 text-center">
          {props.heading}
        </h1>
        <hr className="border-t-2 my-2" />
      </div>
    </div>
  );
}