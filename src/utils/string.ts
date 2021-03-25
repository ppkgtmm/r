import _ from "lodash";

export function concat(strings: string[], sep: string = " ") {
  return _.join(strings, sep);
}
