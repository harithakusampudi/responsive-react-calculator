import moment from "moment";
import { keyColors } from "../constants";

export const isNumber = (key: any) => {
  return !isNaN(key) || key === ".";
};

export const isOperator = (value: string | undefined) => {
  return (
    value === "±" ||
    value === "+" ||
    value === "-" ||
    value === "%" ||
    value === "/" ||
    value === "*" ||
    value === "."
  );
};

export const getColorForKey = (key: string) => {
  if (isNumber(key)) {
    return keyColors.black;
  } else {
    const specialKeys = key === "ac" || key === "±" || key === "%";
    return specialKeys ? keyColors.lightGrey : keyColors.orange;
  }
};

function checkForYesterdayOrToday(momentDate: any, format: any) {
  return momentDate.isSame(format, "d");
}
export const getDateIsFrom = (date: string) => {
  var REFERENCE = moment();
  var TODAY = REFERENCE.clone().startOf("day");
  var YESTERDAY = REFERENCE.clone()
    .subtract(1, "days")
    .startOf("day");
  let today = checkForYesterdayOrToday(date, TODAY) ? "TODAY" : null;
  let yesterday = checkForYesterdayOrToday(date, YESTERDAY)
    ? "YESTERDAY"
    : null;
  return today || yesterday;
};
