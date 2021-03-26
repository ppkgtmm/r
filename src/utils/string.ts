import { join } from "lodash";

export function concat(strings: string[], sep: string = " ") {
  return join(strings, sep);
}
