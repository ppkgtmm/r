import React from "react";
import BackgroundCard from "./BackgroundCard";
import { FlexBox } from "../utils";
import { education, experience } from "../../constants/constant";
export default function BackgroundSection(props) {
  return (
    <FlexBox>
      <BackgroundCard info={education} />
      <BackgroundCard info={experience} />
    </FlexBox>
  );
}
