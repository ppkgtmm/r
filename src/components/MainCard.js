import React from "react";
import Contact from "./Contact";

export default function MainCard(props) {
  return (
    <div className="font-light rounded-lg bg-ygreen m-auto md:mt-20 lg:w-6/12 md:w-8/12 p-8 px-14 main">
      <div className="mx-auto">
        <h1 className="text-5xl xl:text-6xl overflow-ellipsis overflow-hidden uppercase text-gray-700 text-center">
          {props.fullName}
        </h1>
        <hr className="border-t-2 my-2" />
        <p className="text-center sm:text-left text-md md:text-lg text-left paragraph-main">
          {props.description}
        </p>
        <Contact urls={props.contactUrls} />
      </div>
    </div>
  );
}
