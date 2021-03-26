import { get } from "lodash";
import React from "react";
import { concat } from "../../utils/string";

export default function FlexBox(props) {
    const className = concat(["block md:mx-4 lg:mx-6 mt-4 md:mt-10 md:flex justify-center items-stretch",get(props,'wrap', '')])
    return (
        <div className={className}>
            {get(props,'children', null)}
        </div>
    )
}