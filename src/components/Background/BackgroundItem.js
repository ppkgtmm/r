import { get } from "lodash";
import React from "react";

export default function BackgroundItem({ item }) {
  return !item ? null : (
    <li className="text-left leading-relaxed my-3 flex-col">
      <p>
        {get(item, "title", "")} - {get(item, "place", "")}
      </p>
      <p className="italic font-medium">
        {get(item, "start", "")} - {get(item, "end", "")}
      </p>
    </li>
  );
}
