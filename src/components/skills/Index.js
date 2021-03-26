import { get } from "lodash";
import React from "react";
import { concat } from "../../utils/string";
import Score from "./Score";

export default function Skills(props) {
  const skillClassName =
    "capitalize sm:w-9/12 md:max-w-md lg:max-w-md xl:w-9/12 max-w-lg font-light rounded-lg mx-auto md:mx-3 lg-mx-7 mt-5 md:mt-12 md:mb-0 p-8 px-14 main";
  const backgroundColor = get(props, "info.bg", "white");
  const bgClass = concat(["bg", backgroundColor], "-");
  return !props.info ? null : (
    <div className={concat([skillClassName, bgClass])}>
      <h2 className="uppercase text-xl xl:text-2xl overflow-ellipsis overflow-hidden text-gray-700 text-center">
        {" "}
        {get(props, "info.heading", "")}
      </h2>
      <hr className="border-t-2 my-2" />
      <ul className="flex flex-col justify-evenly">
        {(props.info.skills || []).map((skill, index) => (
          <li
            key={index}
            className="leading-loose skill mx-2 flex justify-between items-center flex-wrap"
          >
            <p>{skill[0]}</p>
            <Score score={skill[1]} />
          </li>
        ))}
      </ul>
    </div>
  );
}
