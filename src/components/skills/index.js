import { get } from "lodash";
import React from "react";
import { concat } from "../../utils/string";

export default function Skills(props) {
  const skillClassName =
    "capitalize sm:w-9/12 md:w-full lg:max-w-md xl:w-9/12 max-w-lg font-light rounded-lg mx-auto md:mx-2 mt-8 md:mt-20 md:mb-0 p-8 px-14 main";
  return !props.info ? null : (
    <div className={concat([skillClassName, get(props, "bg", "")])}>aaa</div>
  );
}
