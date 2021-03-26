import { constant, get, times } from "lodash";
import { Circle } from "phosphor-react";
import React from "react";
import { fullscore } from "../../constants/constant";

export default function Score(props) {
  const noScore = fullscore - get(props, "score", 0);
  const score = get(props, "score", 0);
  const className = "w-3.5 h-3.5 score";
  return !props.score ? null : (
    <div className="flex">
      {times(score >= 0 ? score : 0, constant(0)).map((_, index) => (
        <Circle key={index} className={className} weight="fill" />
      ))}
      {times(noScore >= 0 ? noScore : 0, constant(0)).map((_, index) => (
        <Circle key={index} className={className} />
      ))}
    </div>
  );
}
