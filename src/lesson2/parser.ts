import { isNumber } from "./helpers";
import { mathOperators } from "./mathOperators";

export type ParsedLineType = (number | string)[];

export const parser = (line: string): ParsedLineType => {
    const stack = line.split(" ");
    let is_error = 0;
    let res =  stack.reduce<ParsedLineType>((result, item, key) => {
      const prevItem = stack[key - 1];

      const isValidNumberPush = !isNumber(prevItem) && isNumber(item);
      const isValidOperatorPush =
          isNumber(prevItem) &&
          !isNumber(item) &&
          mathOperators.hasOwnProperty(item);
      if (isValidNumberPush) {
        result.push(Number(item));
      } else if (isValidOperatorPush) {
        result.push(item);
      } else {
          is_error = 1;
      }
      return result;
    }, []);

    if (is_error == 1){
        res = [];
    }
    return res;
};
