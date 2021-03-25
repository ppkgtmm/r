import { get } from "lodash";
import React from "react";
import Contact from "./Contact";

export default function MainCard(props) {
  return (
    <div className="font-light rounded-lg bg-ygreen m-auto md:mt-20 sm:w-9/12 md:w-8/12 lg:w-6/12 p-12 px-14 main">
      <div className="mx-auto">
        <h1 className="text-4xl xl:text-5xl overflow-ellipsis overflow-hidden uppercase text-gray-700 text-center">
          {get(props, "fullName", "")}
        </h1>
        <hr className="border-t-2 my-2" />
        <p className="text-center font-light sm:text-left text-md md:text-lg text-left paragraph-main">
          {get(props, "description", "")}
        </p>
        <Contact urls={get(props, "contactUrls", null)} />
      </div>
    </div>
  );
}
