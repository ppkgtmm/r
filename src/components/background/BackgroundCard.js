import { get } from "lodash";
import React from "react";
import { concat } from "../../utils/string.ts";
import BackgroundItem from "./BackgroundItem";

export default function BackgroundCard(props) {
  const BackgroundClassName =
    "capitalize sm:w-9/12 md:w-full lg:max-w-md xl:w-9/12 max-w-lg font-light rounded-lg mx-auto md:mx-0 mt-4 md:mt-10 md:mb-0 p-8 px-14 main";
  return (
    <div
      className={concat([
        BackgroundClassName,
        get(props, "bg", ""),
        get(props, "justify", ""),
      ])}
    >
      <div className="mx-auto">
        <h1 className="text-2xl xl:text-3xl overflow-ellipsis overflow-hidden uppercase text-black text-center">
          {get(props, "heading", "")}
        </h1>
        <hr className="border-t-2 my-2" />
      </div>
      <ul className="background list-inside">
        {get(props, "info", []).map((item, index) => (
          <BackgroundItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
}
