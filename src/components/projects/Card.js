import { get } from "lodash";
import React from "react";

export default function ProjectCard(props) {
  return (
    <div class="project sm:w-9/12 md:w-full lg:max-w-md xl:w-9/12 max-w-lg rounded-lg bg-black text-white flex flex-col overflow-hidden relative m-3">
      <img src={get(props, "data.img.src", "")} alt={get(props, "data.img.alt", "")} />
      <div className="absolute top-0 w-full h-full left-0 max-w-lg bg-black opacity-80 md:opacity-0 hover:opacity-80 p-8">
        <h3 className="font-semibold text-xl my-4">{get(props, "data.name", "")}</h3>
        <p>{get(props, "data.description", "")}</p>
      </div>
    </div>
  );
}
