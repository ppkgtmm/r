import { get } from "lodash";
import React from "react";
import Contact from "./Contact";
export default function MainCard(props) {
  return (
    <div className="font-light rounded-lg bg-ygreen max-w-lg lg:max-w-xl  m-auto md:mt-20 sm:w-9/12 md:w-8/12 lg:w-6/12 p-12 px-14 main">
      <div className="mx-auto">
        <img
          className="profile w-48 h-48 rounded-full border-8 border-green md:mb-8 mx-auto"
          src={"https://firebasestorage.googleapis.com/v0/b/resume-the-work.appspot.com/o/profile.jpg?alt=media&token=8f1d1217-32b1-49c5-9f7c-d7c742aa8a53"}
          alt="profile"
        />
        <h1 className="text-4xl xl:text-5xl overflow-ellipsis overflow-hidden uppercase text-black text-center">
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
